import React from "react";
import {
  NavLink,
} from "react-router-dom";

export default function Home() {



  return (
    <div>
      <br></br>
      <h1>Welcome to yPAT</h1>
      <h2>your Personal Activity Tracker</h2>
      <p>
        To get the most out of this application you should first <NavLink activeClassName="active" to="/register">register</NavLink> as a user.
      </p>
      <br />
      <h3>With yPAT we are aiming to help you succeed with your exercise goals,
          no matter your ambitions, your choice of activity or the intensity of your training.</h3>
    </div>
  );
}
