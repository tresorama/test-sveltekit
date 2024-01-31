import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  return {
    // add auth js session from "hooks.server" to "page" svelte store
    session: event.locals.session,
    user: event.locals.user,
  };
};