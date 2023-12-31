import keys from "../config/keys.js";
import stripe from "stripe";
import requireLogin from "../middlewares/requireLogin.js";
const stripeInstance = stripe(keys.stripeSecretKey);

export default (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripeInstance.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id,
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
