import {cookies} from "next/headers";

export const getSessionToken = () => {
  const allCookies = cookies();
  return allCookies.get('next-auth.session-token')?.value;
}
