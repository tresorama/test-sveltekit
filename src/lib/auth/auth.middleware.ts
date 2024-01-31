import { lucia } from "./auth.config";
import { redirect, type Handle } from "@sveltejs/kit";

export const handleAuth: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get(lucia.sessionCookieName);
  if (!sessionId) {
    event.locals.user = null;
    event.locals.session = null;
    return resolve(event);
  }

  const { session, user } = await lucia.validateSession(sessionId);
  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    // sveltekit types deviates from the de-facto standard
    // you can use 'as any' too
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes
    });
  }
  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie();
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes
    });
  }
  event.locals.user = user;
  event.locals.session = session;
  return resolve(event);
};

export const handleAuthorization: Handle = async ({ event, resolve }) => {

  if (event.url.pathname.startsWith("/protected")) {
    const user = event.locals.user;
    if (!user) {
      console.log({
        what: "hooks.server handleAuthorization",
        result: "route is protected and user is NOT logged => redirect to /login",
      });
      throw redirect(303, "/auth/login");
    }

    console.log({
      what: "hooks.server handleAuthorization",
      result: "route is protected and user is logged => allow",
    });
    return resolve(event);
  }

  console.log({
    what: "hooks.server handleAuthorization",
    result: "route is NOT protected => allow",
  });
  return resolve(event);

};