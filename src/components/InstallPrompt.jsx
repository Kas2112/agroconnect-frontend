// frontend/src/components/InstallPrompt.jsx
import React, { useState, useEffect } from 'react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    });
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === 'accepted') {
        console.log('✅ User accepted the install prompt');
        setShowPrompt(false);
      } else {
        console.log('❌ User dismissed the install prompt');
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      right: '20px',
      background: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      zIndex: 9999,
      border: '1px solid #e5e7eb'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ fontSize: '32px' }}>📱</div>
        <div style={{ flex: 1 }}>
          <h4 style={{ margin: '0 0 5px 0', color: '#1a1a1a' }}>
            Install Agro Connect
          </h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
            Get the app for a better experience
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handleDismiss}
            style={{
              padding: '8px 12px',
              border: 'none',
              background: '#f3f4f6',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Not now
          </button>
          <button
            onClick={handleInstall}
            style={{
              padding: '8px 16px',
              border: 'none',
              background: '#22c55e',
              color: 'white',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;