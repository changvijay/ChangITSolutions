"use client";

import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

export const useOptionalAuth = () => {
  const [isProviderAvailable, setIsProviderAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if Auth0 config exists
    const hasConfig = !!(
      process.env.NEXT_PUBLIC_AUTH0_DOMAIN && 
      process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID
    );
    setIsProviderAvailable(hasConfig);
  }, []);

  try {
    const auth0 = useAuth0();
    
    // If we haven't determined availability yet, show loading
    if (isProviderAvailable === null) {
      return {
        isLoading: true,
        isAuthenticated: false,
        user: undefined,
        loginWithRedirect: () => Promise.resolve(),
        logout: () => {},
        getAccessTokenSilently: () => Promise.reject('Loading'),
        isAvailable: false,
      };
    }

    return {
      ...auth0,
      isAvailable: isProviderAvailable,
    };
  } catch {
    // Auth0 provider not available, return default values
    return {
      isLoading: false,
      isAuthenticated: false,
      user: undefined,
      loginWithRedirect: () => console.warn('Auth0 not configured'),
      logout: () => console.warn('Auth0 not configured'),
      getAccessTokenSilently: () => Promise.reject('Auth0 not configured'),
      isAvailable: false,
    };
  }
};