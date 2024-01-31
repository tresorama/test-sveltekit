import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  return {
    // add auth js session from "hooks.server" to "page" svelte store
    session: await event.locals.auth()
  };
};