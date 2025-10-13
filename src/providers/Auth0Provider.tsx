import React from 'react';
import { Auth0Provider as Auth0ProviderSDK } from '@auth0/auth0-react';

interface Auth0ProviderProps {
  children: React.ReactNode;
}

const Auth0Provider: React.FC<Auth0ProviderProps> = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = window.location.origin;

  if (!domain || !clientId) {
    console.warn('Auth0 configuration missing. Please add VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID to your .env file');
    // Return children without Auth0 if config is missing (makes login optional)
    return <>{children}</>;
  }

  return (
    <Auth0ProviderSDK
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        scope: "openid profile email"
      }}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0ProviderSDK>
  );
};

export default Auth0Provider;