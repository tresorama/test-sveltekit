import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";


export const load: PageLoad = () => {

  const throwUnexpectedError = false;// toggle me while learning

  if (throwUnexpectedError) {
    // this is an unexpecetd error
    // it will be always views in the frontend as 500 internal error
    // any sensible data about the error will not be present in the frontend
    throw new Error('Great');
  }
  else {
    // this is an expected error
    // status and message will be availabl eto fronted use the "$page" store
    throw error(403, { message: "You are not our friends. No access baby!" });
  }

  // 
};