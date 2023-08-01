import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

function App(props) {
  useEffect(() => {
    props.fetchUser();

    console.log("Component has mounted!");
    return () => {
      console.log("Component will unmount!");
      // Perform any clean-up operations here
    };
  }, []);
  return (
    <div>
      <BrowserRouter>
        {/* materialize class */}
        <div className="container">
          {/*same thing */}
          {true ? <Route path="/" component={Header} /> : <Header />}
          {/*same thing */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, actions)(App);
{
  /* <a href="/auth/google">Sign In With Google</a> */
}
