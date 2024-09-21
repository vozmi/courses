"use server";
import {prisma} from "@/shared/lib/prisma-client";
import {revalidatePath} from "next/cache";

export async function unfollow(followerId: string, followingId: string) {
  const record = await prisma.follows.findFirst({
    where: {
      followerId,
      followingId,
    },
  });

  if (!record) return;

  await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: record.followerId,
        followingId: record.followingId,
      }
    },
  });

  revalidatePath('/users/[id]');
}
