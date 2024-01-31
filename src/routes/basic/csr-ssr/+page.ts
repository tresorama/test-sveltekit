import { browser } from "$app/environment";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  console.log("🚀 ~ /basic/csr browser:", browser);

  return {
    message: "this page is 'CSR + SSR' rendered"
  };
};