import {prisma} from "@/shared/lib/prisma-client";

export const isFollowing = async (followerId: string, followingId: string) => {
  const followingRelation = await prisma.follows.findUnique({
    where: {
      followerId_followingId: {
        followerId,
        followingId,
      }
    }
  });

  return !!followingRelation;
};
