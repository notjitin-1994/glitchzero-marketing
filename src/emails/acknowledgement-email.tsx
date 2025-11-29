import * as React from 'react';

interface AcknowledgementEmailProps {
  name: string;
}

export function AcknowledgementEmail({ name }: AcknowledgementEmailProps) {
  const firstName = name.split(' ')[0];

  return (
    <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#0a0a0a', margin: 0, padding: 0 }}>
      <tbody>
        <tr>
          <td align="center" style={{ padding: '24px 16px' }}>
            <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', width: '100%', backgroundColor: '#0a0a0a', color: '#e5e5e5' }}>
              <div style={{ padding: '32px', borderTop: '4px solid #ff4f00' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffffff', margin: '0 0 8px 0' }}>
            GlitchZero
          </h1>
          <p style={{ color: '#ff4f00', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>
            Engineering Digital Excellence
          </p>
        </div>

        {/* Main Content */}
        <div style={{ backgroundColor: '#171717', padding: '32px', borderRadius: '4px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '16px' }}>
            Thank You, {firstName}!
          </h2>

          <p style={{ color: '#e5e5e5', lineHeight: '1.8', marginBottom: '16px' }}>
            We've received your enquiry and are excited to learn more about your project.
          </p>

          <p style={{ color: '#e5e5e5', lineHeight: '1.8', marginBottom: '16px' }}>
            Our team will review your requirements and get back to you within <strong style={{ color: '#ff4f00' }}>24 hours</strong>.
          </p>

          <p style={{ color: '#e5e5e5', lineHeight: '1.8', margin: 0 }}>
            In the meantime, feel free to explore our services and see how we've helped businesses like yours achieve digital excellence.
          </p>
        </div>

        {/* What's Next Section */}
        <div style={{ backgroundColor: '#171717', padding: '24px', borderRadius: '4px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#ff4f00', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            What Happens Next?
          </h3>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '12px 16px 12px 0', color: '#ff4f00', fontWeight: 'bold', fontSize: '18px', verticalAlign: 'top', width: '40px' }}>01</td>
                <td style={{ padding: '12px 0', color: '#e5e5e5' }}>
                  <strong style={{ color: '#ffffff' }}>Review</strong> — We analyze your project requirements
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 12px 0', color: '#ff4f00', fontWeight: 'bold', fontSize: '18px', verticalAlign: 'top' }}>02</td>
                <td style={{ padding: '12px 0', color: '#e5e5e5' }}>
                  <strong style={{ color: '#ffffff' }}>Connect</strong> — Schedule a discovery call to discuss your vision
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 12px 0', color: '#ff4f00', fontWeight: 'bold', fontSize: '18px', verticalAlign: 'top' }}>03</td>
                <td style={{ padding: '12px 0', color: '#e5e5e5' }}>
                  <strong style={{ color: '#ffffff' }}>Propose</strong> — Receive a tailored solution for your needs
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Contact Info */}
        <div style={{ textAlign: 'center', padding: '24px 0', borderTop: '1px solid #262626' }}>
          <p style={{ color: '#a3a3a3', fontSize: '14px', marginBottom: '8px' }}>
            Have questions? Reach us at
          </p>
          <a href="mailto:hello@glitchzerolabs.com" style={{ color: '#ff4f00', textDecoration: 'none', fontWeight: '500' }}>
            hello@glitchzerolabs.com
          </a>
        </div>

                {/* Footer */}
                <div style={{ textAlign: 'center', paddingTop: '24px', borderTop: '1px solid #262626' }}>
                  <p style={{ color: '#737373', fontSize: '12px', margin: '0 0 8px 0' }}>
                    © {new Date().getFullYear()} GlitchZero. All rights reserved.
                  </p>
                  <p style={{ color: '#525252', fontSize: '11px', margin: 0 }}>
                    You're receiving this email because you submitted an enquiry on our website.
                  </p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
