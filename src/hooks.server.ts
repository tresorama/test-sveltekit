import { type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handleInternalization } from '$lib/i18n/i18n.middleware';

const handleLogging: Handle = ({ event, resolve }) => {
  console.log("");
  console.log("");
  console.log({ what: "hooks.server - handleLogging", pathname: event.url.pathname });

  return resolve(event);
};

export const handle = sequence(handleLogging, handleInternalization);


