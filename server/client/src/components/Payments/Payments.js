import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../actions";
const Payments = (props) => {
  useEffect(() => {}, []);
  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 emaily credits"
      amount={500}
      token={(token) => props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    >
      <button className="btn btnStripe">Add Credits</button>
    </StripeCheckout>
  ); // amount is in cents, token is callback function
};
export default connect(null, actions)(Payments);
