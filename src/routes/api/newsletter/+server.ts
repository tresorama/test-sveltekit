import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

// api/newsletter GET
export const GET: RequestHandler = () => {
  return new Response("Newsletter", {
    status: 200,
    headers: {
      "banana": "yellow"
    }
  });
};

// api/newsletter POST
export const POST: RequestHandler = async (event) => {
  const formData = await event.request.formData();
  const email = formData.get('email');

  if (!email) error(400, "Missing or invalid email");

  // register the new user
  console.log({ email });


  return new Response(formData, {
    status: 200,
  });
};