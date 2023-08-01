import express from "express";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import passport from "passport";
import authRoutes from "./routes/authRoutes.js";
import keys from "./config/keys.js";
import "./models/User.js";
import "./services/passport.js";

mongoose.connect(keys.mongoURI);
const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT);
