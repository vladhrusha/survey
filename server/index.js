import express from "express";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import passport from "passport";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import billingRoutes from "./routes/billingRoutes.js";

import keys from "./config/keys.js";
import "./models/User.js";
import "./services/passport.js";

mongoose.connect(keys.mongoURI);
const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

if ((process.env.NODE_ENV = "production")) {
  const path = (await import("path")).default;
  app.use(express.static("client/build"));
  // express will serve up production assets
  // app.use(express.static(path.join(__dirname, "/client/build")));
  //if no file inside build that express is looking for it goes to next lines, otherwise it serves file

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT);
