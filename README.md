# Next.js Microsoft Entra ID Authentication

This is a Next.js application with Microsoft Entra ID (formerly Azure AD) authentication implemented using Next-Auth.

## Features

- Next.js App Router with TypeScript
- Authentication with Microsoft Entra ID
- Protected routes
- Tailwind CSS for styling
- TypeScript typing for Next-Auth

## Getting Started

### Prerequisites

- Node.js and npm installed
- A Microsoft Entra ID account and registered application

### Setup Microsoft Entra ID

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to Microsoft Entra ID > App registrations
3. Click "New registration"
4. Enter a name for your application
5. Set the redirect URI to `http://localhost:3000/api/auth/callback/azure-ad`
6. Register the application
7. After registration, note down the following information:
   - Application (client) ID
   - Directory (tenant) ID
8. Create a client secret under "Certificates & secrets"

### Installation

1. Configure environment variables:
```bash
# Update .env.local file with your Microsoft Entra ID credentials
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your-generated-secret>

# Microsoft Entra ID Configuration
AZURE_AD_CLIENT_ID=<your-client-id>
AZURE_AD_CLIENT_SECRET=<your-client-secret>
AZURE_AD_TENANT_ID=<your-tenant-id>
```

2. Generate a secure NEXTAUTH_SECRET using:
```bash
openssl rand -base64 32
```

### Running the Application

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

- `/src/app` - Next.js app router pages
- `/src/app/api/auth/[...nextauth]` - NextAuth.js API route
- `/src/app/components` - UI components
- `/src/app/protected` - Protected pages requiring authentication
- `/src/types` - TypeScript type definitions

## Authentication Flow

1. User clicks "Sign in" button
2. User is redirected to Microsoft Entra ID login page
3. After successful authentication, user is redirected back to the application
4. NextAuth.js creates a session with the user's information
5. User can now access protected routes

## Learn More

To learn more about Next.js and NextAuth.js:

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Microsoft Entra ID Documentation](https://learn.microsoft.com/en-us/entra/identity/)
