import { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET } from "$env/static/private";
import type { SvelteKitAuthConfig } from "@auth/sveltekit";
import github from "@auth/sveltekit/providers/github";

export const authConfig: SvelteKitAuthConfig = {
  providers: [
    github({
      clientId: AUTH_GITHUB_ID,
      clientSecret: AUTH_GITHUB_SECRET
    })
  ]
};