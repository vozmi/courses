import * as admin from "firebase-admin";

admin.initializeApp();

export {api} from "./app";
export {createUserRecord} from "./auth";
