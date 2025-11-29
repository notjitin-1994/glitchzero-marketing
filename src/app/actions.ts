
'use server';

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid data provided. Please check the fields.',
    };
  }

  try {
    // Here you would typically send an email, save to a database, etc.
    console.log('New contact form submission:', validatedFields.data);

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
