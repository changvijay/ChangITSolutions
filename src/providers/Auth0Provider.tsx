"use client";

import React from 'react';
import { Auth0Provider as Auth0ProviderSDK } from '@auth0/auth0-react';

interface Auth0ProviderProps {
  children: React.ReactNode;
}

const Auth0Provider: React.FC<Auth0ProviderProps> = ({ children }) => {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
  const redirectUri = typeof window !== 'undefined' ? window.location.origin : undefined;

  if (!domain || !clientId) {
    console.warn('Auth0 configuration missing. Please add NEXT_PUBLIC_AUTH0_DOMAIN and NEXT_PUBLIC_AUTH0_CLIENT_ID to your environment.');
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