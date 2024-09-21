"use client";
import React, {useTransition} from 'react';
import {User} from "@prisma/client";
import {follow, unfollow} from "../model";
import {useSessionUser} from "@/shared/lib/auth/useSessionUser";

type Props = {
  userId: User['id'];
  isFollowing?: boolean;
};

export function FollowButton({userId, isFollowing}: Props) {
  const [isPending, startTransition] = useTransition();

  const currentUser = useSessionUser();
  if (!currentUser) return null;

  const startFollowing = () => startTransition(() => follow(currentUser.id, userId));
  const startUnfollowing = () => startTransition(() => unfollow(currentUser.id, userId));

  return (
    isFollowing ? <button onClick={startUnfollowing} disabled={isPending}>Unfollow</button> :
      <button onClick={startFollowing} disabled={isPending}>Follow</button>
  );
}
