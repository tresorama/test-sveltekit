import { browser } from "$app/environment";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  console.log("🚀 ~ /basic/ssr-only browser:", browser);

  return {
    message: "this page is CSR rendered"
  };

};
