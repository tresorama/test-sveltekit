import { browser } from "$app/environment";
import type { PageLoad } from "./$types";

// run this page only on browser
export const ssr = false;

export const load: PageLoad = async () => {
  console.log("🚀 ~ /basic/csr browser:", browser);

  return {
    message: "this page is 'CSR only' rendered"
  };
};