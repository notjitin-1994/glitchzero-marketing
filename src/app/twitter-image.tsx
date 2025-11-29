import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'GlitchZero - Digital Solutions for Indian Businesses';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#121212',
          position: 'relative',
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(rgba(255, 79, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 79, 0, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Orange accent glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 79, 0, 0.15) 0%, transparent 70%)',
          }}
        />

        {/* Content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {/* G0 Box */}
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#FF4F00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 60px rgba(255, 79, 0, 0.4)',
              }}
            >
              <span
                style={{
                  fontSize: '48px',
                  fontWeight: 800,
                  color: '#121212',
                  letterSpacing: '0.02em',
                }}
              >
                G0
              </span>
            </div>

            {/* GlitchZero text */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '64px',
                  fontWeight: 800,
                  color: '#FF4F00',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                }}
              >
                Glitch
              </span>
              <span
                style={{
                  fontSize: '64px',
                  fontWeight: 800,
                  color: '#E5E5E7',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                }}
              >
                Zero
              </span>
            </div>
          </div>

          {/* Tagline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span
              style={{
                fontSize: '32px',
                fontWeight: 500,
                color: '#E5E5E7',
                textAlign: 'center',
              }}
            >
              Zero Glitches. Infinite Possibilities.
            </span>
            <span
              style={{
                fontSize: '20px',
                fontWeight: 400,
                color: '#8E8E93',
                textAlign: 'center',
                maxWidth: '700px',
              }}
            >
              Custom Web & Mobile Apps for Indian Businesses
            </span>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #FF4F00, transparent)',
          }}
        />

        {/* Website URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#8E8E93',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            glitchzero.dev
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
