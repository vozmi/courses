import {prisma} from "@/shared/db/lib";

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
