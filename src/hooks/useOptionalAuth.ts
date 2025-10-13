import { useAuth0 } from '@auth0/auth0-react';

export const useOptionalAuth = () => {
  try {
    const auth0 = useAuth0();
    return {
      ...auth0,
      isAvailable: true,
    };
  } catch (error) {
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