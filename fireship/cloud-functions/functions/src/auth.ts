import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";

const db = admin.firestore();

export const createUserRecord = functions.auth.user().onCreate(
  async (user, context) => {
    const {email, uid} = user;

    if (!email) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Email address is required.",
      );
    }

    const userRef = db.collection("users").doc(uid);

    return userRef.set({
      uid,
      email,
      createdAt: context.timestamp,
    });
  }
);
