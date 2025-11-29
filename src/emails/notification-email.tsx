import * as React from 'react';

interface NotificationEmailProps {
  name: string;
  email: string;
  phone?: string;
  projectDetails?: string;
}

export function NotificationEmail({ name, email, phone, projectDetails }: NotificationEmailProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', backgroundColor: '#0a0a0a', color: '#e5e5e5' }}>
      <div style={{ padding: '32px', borderTop: '4px solid #ff4f00' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffffff', marginBottom: '24px' }}>
          New Enquiry from GlitchZero Website
        </h1>

        <div style={{ backgroundColor: '#171717', padding: '24px', borderRadius: '4px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: '600', color: '#ff4f00', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Contact Details
          </h2>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '8px 0', color: '#a3a3a3', width: '120px', verticalAlign: 'top' }}>Name:</td>
                <td style={{ padding: '8px 0', color: '#ffffff', fontWeight: '500' }}>{name}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0', color: '#a3a3a3', verticalAlign: 'top' }}>Email:</td>
                <td style={{ padding: '8px 0' }}>
                  <a href={`mailto:${email}`} style={{ color: '#ff4f00', textDecoration: 'none' }}>{email}</a>
                </td>
              </tr>
              {phone && (
                <tr>
                  <td style={{ padding: '8px 0', color: '#a3a3a3', verticalAlign: 'top' }}>Phone:</td>
                  <td style={{ padding: '8px 0', color: '#ffffff' }}>
                    <a href={`tel:${phone}`} style={{ color: '#ff4f00', textDecoration: 'none' }}>{phone}</a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {projectDetails && (
          <div style={{ backgroundColor: '#171717', padding: '24px', borderRadius: '4px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: '600', color: '#ff4f00', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Project Details
            </h2>
            <p style={{ color: '#e5e5e5', lineHeight: '1.6', whiteSpace: 'pre-wrap', margin: 0 }}>
              {projectDetails}
            </p>
          </div>
        )}

        <div style={{ borderTop: '1px solid #262626', paddingTop: '24px', marginTop: '24px' }}>
          <p style={{ color: '#737373', fontSize: '12px', margin: 0 }}>
            This enquiry was submitted through the GlitchZero Labs website contact form.
          </p>
        </div>
      </div>
    </div>
  );
}
