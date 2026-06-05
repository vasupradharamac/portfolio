import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Vasupradha R — Building Agentic Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 96px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Purple glow blob */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '200px',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Top label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#8B5CF6',
            }}
          />
          <span style={{ color: '#8B5CF6', fontSize: '16px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Portfolio
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: '700',
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: '24px',
            letterSpacing: '-0.02em',
          }}
        >
          Vasupradha R
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '28px',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: '400',
            marginBottom: '48px',
          }}
        >
          Building Agentic Solutions
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['Voice AI', 'Multi-Agent', 'Full Stack'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid rgba(139,92,246,0.4)',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '16px',
                background: 'rgba(139,92,246,0.08)',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
