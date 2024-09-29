import * as functions from "firebase-functions";
import * as express from "express";

const app = express();
app.get("/express", (req, res) => {
  res.send("Hello from Express!");
});

export const api = functions.https.onRequest(app);
