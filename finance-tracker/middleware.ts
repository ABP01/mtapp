import { authMiddleware } from "@clerk/nextjs/server";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  // Allow signed out users to access the specified routes:
  // publicRoutes: ['/anyone-can-visit-this-route'],
  publicRoutes: ['/','/sign-in', '/sign-in/SignIn_clerk_catchall_check_1726304425093'],
  publishableKey: 'pk_test_ZW5hYmxpbmctd3Jlbi02NC5jbGVyay5hY2NvdW50cy5kZXYk',
  secretKey: process.env.CLERK_ENCRYPTION_KEY,
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};