import React from 'react';
import { Html } from '@react-three/drei';

const ThreeLoader = () => {
  return (
    <Html center>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '5px solid rgba(0, 255, 255, 0.3)',
          borderTop: '5px solid rgba(255, 0, 255, 0.8)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }} />
      </div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Html>
  );
};

export default ThreeLoader;
