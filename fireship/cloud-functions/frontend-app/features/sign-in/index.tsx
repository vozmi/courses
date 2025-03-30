"use client";
import {auth} from "@/shared/firebase";
import {GoogleAuthProvider, signInWithPopup} from "@firebase/auth";

export const SignIn = () => {
  const onClick = () => {
    signInWithPopup(auth, new GoogleAuthProvider());
  };

  return (
    <button onClick={onClick} style={{
        backgroundColor: "#007aff",
        color: "#fff",
        border: "none",
        padding: "8px 16px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px"
    }}>Sign in with</button>
  );
};