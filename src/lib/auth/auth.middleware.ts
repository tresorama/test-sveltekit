import { SvelteKitAuth } from "@auth/sveltekit";
import { redirect, type Handle } from "@sveltejs/kit";
import { authConfig } from "./auth.config";

export const handleAuthInit: Handle = SvelteKitAuth(authConfig);
export const handleAuthorization: Handle = async ({ event, resolve }) => {

  // "handleAuthInit" inject "event.locals.auth()" function that we can use
  // - in hooks.server.ts (here)
  // - in every +XXXX.server.ts

  const isRouteProtected = event.url.pathname.startsWith('/protected');

  if (!isRouteProtected) {
    console.log({
      what: "hooks.server - handleAuth",
      result: "route is NOT protected >= allow"
    });
    return resolve(event);
  }

  const session = await event.locals.auth();

  if (!session) {
    console.log({
      what: "hooks.server - handleAuth",
      result: "user is NOT logged in and route IS protected >= redirect to /auth/signin"
    });
    throw redirect(303, '/auth/signin');
  }

  console.log({
    what: "hooks.server - handleAuth",
    result: "user is logged in and route is protected >= allow"
  });
  return resolve(event);

};