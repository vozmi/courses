import {AdapterUser} from "next-auth/adapters";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: AdapterUser['id'];
      name: AdapterUser['name'];
      email: AdapterUser['email'];
      image: AdapterUser['image'];
    }
  }
}
