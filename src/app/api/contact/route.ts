import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { NotificationEmail } from '@/emails/notification-email';
import { AcknowledgementEmail } from '@/emails/acknowledgement-email';
import { supabase, ContactSubmission } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectDetails?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, projectDetails } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save to Supabase database
    const submission: ContactSubmission = {
      name,
      email,
      phone: phone || null,
      project_details: projectDetails || null,
      status: 'new',
    };

    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert(submission);

    if (dbError) {
      console.error('Failed to save to database:', dbError);
      // Continue with email sending even if database save fails
    }

    // Render email templates to HTML
    const notificationHtml = await render(NotificationEmail({ name, email, phone, projectDetails }));
    const acknowledgementHtml = await render(AcknowledgementEmail({ name }));

    // Send notification email to business
    const notificationResult = await resend.emails.send({
      from: 'GlitchZero Labs <noreply@glitchzerolabs.com>',
      to: ['jitin@glitchzerolabs.com'],
      subject: `New Enquiry from ${name}`,
      html: notificationHtml,
    });

    if (notificationResult.error) {
      console.error('Failed to send notification email:', notificationResult.error);
      return NextResponse.json(
        { error: 'Failed to send notification email' },
        { status: 500 }
      );
    }

    // Send acknowledgement email to user
    const acknowledgementResult = await resend.emails.send({
      from: 'GlitchZero Labs <noreply@glitchzerolabs.com>',
      to: [email],
      subject: 'Thank you for contacting GlitchZero Labs!',
      html: acknowledgementHtml,
    });

    if (acknowledgementResult.error) {
      console.error('Failed to send acknowledgement email:', acknowledgementResult.error);
      // Don't fail the request if acknowledgement fails - notification was sent
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been submitted successfully',
        notificationId: notificationResult.data?.id,
        acknowledgementId: acknowledgementResult.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
