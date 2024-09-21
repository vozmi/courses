import {useSession} from "next-auth/react";

export const useSessionUser = () => {
  const {data: session} = useSession();
  if (!session) return null;

  const {user} = session;
  if (!user) return null;

  return user;
};
