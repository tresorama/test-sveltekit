import { type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handleInternalization } from '$lib/i18n/i18n.middleware';
import { handleAuth, handleAuthorization } from '$lib/auth/auth.middleware';

const handleLogging: Handle = ({ event, resolve }) => {
  console.log("");
  console.log("");
  console.log("");
  console.log("================= REQUSET ===================");
  console.log({
    what: "hooks.server - handleLogging",
    req: `${event.request.method} ${event.url.pathname}`,
  });

  return resolve(event);
};

export const handle = sequence(
  handleLogging,
  handleInternalization,
  handleAuth,
  handleAuthorization,
);


