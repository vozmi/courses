"use client";
import { signOut, useSession } from "next-auth/react";

export const SignOutButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading" || !session) {
    return null;
  }

  return <button onClick={() => signOut()}>Sign out</button>;
};
