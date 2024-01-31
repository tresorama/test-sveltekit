// routes/login/github/+server.ts
import { github } from "$lib/auth/auth.config";
import { generateState } from "arctic";
import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

// GET /login/github
export const GET: RequestHandler = async (event) => {
  const state = generateState();
  const url = await github.createAuthorizationURL(state);

  event.cookies.set("github_oauth_state", state, {
    path: "/",
    secure: import.meta.env.PROD,
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax"
  });

  redirect(302, url.toString());
};