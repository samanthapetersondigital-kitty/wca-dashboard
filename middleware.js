/**
 * Vercel Edge Middleware — HTTP Basic Auth
 *
 * Runs at the CDN edge before ANY HTML, JavaScript, or assets are served.
 * The password never appears in source code — it lives in a Vercel
 * environment variable (AUTH_PASSWORD) set per-project in the dashboard.
 *
 * To update a password:
 *   vercel env rm AUTH_PASSWORD production --yes --project <project>
 *   vercel env add AUTH_PASSWORD production --project <project>
 *   vercel --prod --project <project>   # redeploy to pick up new env var
 */

export function middleware(request) {
  const authHeader = request.headers.get("authorization");

  if (authHeader && authHeader.startsWith("Basic ")) {
    try {
      const decoded = atob(authHeader.slice(6));
      const colonIdx = decoded.indexOf(":");
      const password = colonIdx >= 0 ? decoded.slice(colonIdx + 1) : decoded;
      const expected = process.env.AUTH_PASSWORD;

      if (expected && password === expected) {
        // Valid — let the request through
        return;
      }
    } catch {
      // Malformed base64 — fall through to 401
    }
  }

  // No auth or wrong password — prompt the browser's native login dialog
  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="BWPP Dashboard"',
      "Content-Type": "text/plain",
    },
  });
}

export const config = {
  // Apply to every route except Vercel internals and static assets
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
