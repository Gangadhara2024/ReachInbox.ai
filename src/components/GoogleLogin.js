import React, { useState } from "react";
import "./form.scss";

export const GoogleLogin = ({ auth }) => {
  // const [apiStatus, setApistatus] = useState("init");
  const gooLogin = async (data) => {
    // setApistatus("pending");
    // const success = await auth.LoginUser(data);
    // console.log(data);
    // setApistatus(success ? "success" : "error");
    // console.log(data);
  };
  return (
    <div className="main-page">
      <div className="header">
        <h2>REACHINBOX</h2>
      </div>
      <div className="form-main">
        <div className="form">
          <h3>Create a new account</h3>
          <div>
            <img src="goo.png" alt="goo" />
            <h5>Sign Up with Google</h5>
          </div>
          <button onClick={gooLogin}>Create an account</button>
          <p>
            Already have an account? <span>Signin</span>
          </p>
        </div>
      </div>
      <div className="footer">
        <p>© 2023 Reachinbox. All rights reserved.</p>
      </div>
    </div>
  );
};
