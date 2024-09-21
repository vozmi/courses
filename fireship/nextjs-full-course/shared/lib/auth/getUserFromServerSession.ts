import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export const getUserFromServerSession = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return null;

  const {user} = session;
  if (!user) return null;

  return user;
};
