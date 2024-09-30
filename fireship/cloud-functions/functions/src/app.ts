import * as express from "express";
import * as cors from "cors";
import {onRequest} from "firebase-functions/v2/https";

const app = express();

app.use(cors({origin: true}));

app.get("/express", (req, res) => {
  res.send("Hello from Express!");
});

export const api = onRequest(app);
