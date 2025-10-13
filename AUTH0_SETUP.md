# Auth0 Setup Guide

This application supports optional Auth0 authentication. Follow these steps to enable it:

## 1. Install Dependencies

```bash
# If using npm
npm install @auth0/auth0-react

# If using bun
bun add @auth0/auth0-react
```

## 2. Create Auth0 Application

1. Go to [Auth0 Dashboard](https://manage.auth0.com/)
2. Create a new application of type "Single Page Application"
3. Note down your Domain and Client ID

## 3. Configure Auth0 Application

In your Auth0 application settings:

- **Allowed Callback URLs**: `http://localhost:5173, https://yourdomain.com`
- **Allowed Logout URLs**: `http://localhost:5173, https://yourdomain.com`
- **Allowed Web Origins**: `http://localhost:5173, https://yourdomain.com`

## 4. Environment Variables

1. Copy `.env.example` to `.env`
2. Fill in your Auth0 credentials:

```env
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-client-id
```

## 5. Optional Authentication

The app works perfectly without Auth0 configuration:
- If Auth0 is not configured, the Sign In button will be disabled
- Users can still access all public content
- No errors or crashes occur without authentication

## Features

- **Optional Authentication**: App works with or without Auth0
- **User Profile Display**: Shows user name/email when authenticated
- **Secure Logout**: Properly clears session and redirects
- **Mobile Responsive**: Authentication UI works on all devices
- **Loading States**: Shows loading indicators during auth operations

## Security

- Uses secure Auth0 standards
- Tokens stored in localStorage
- Automatic token refresh
- Secure logout with proper cleanup