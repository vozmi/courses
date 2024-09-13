import {prisma} from "@/shared/lib/prisma-client";
import {getSessionToken} from "@/shared/lib/auth";

/**
 * Gets the user by session token
 */
export const getUserBySessionToken = async (sessionToken: string) => {
  return prisma.user.findFirst({
    include: {
      sessions: true,
    },
    where: {
      sessions: {
        some: {
          sessionToken,
        }
      }
    }
  });
}

/**
 * Gets the current user from the session
 */
export const getCurrentUser = async () => {
  const sessionToken = getSessionToken();
  if (!sessionToken) {
    return null;
  }

  return getUserBySessionToken(sessionToken);
}
