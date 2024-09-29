import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const db = admin.firestore();

export const createUserRecord = functions.auth.user().onCreate(async (user, context) => {
  const { email, uid } = user;

  if (!email) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "The function must be called " +
        "while authenticated with an email identity."
    );
  }

  const userRef = db.collection("users").doc(uid);

  return userRef.set({
    uid,
    email,
    createdAt: context.timestamp,
  });
});