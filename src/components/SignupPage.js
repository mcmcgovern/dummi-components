import React from "react";
import TextInput from "./common/TextInput";

const SignupPage = (props) => {
  return (
    <div
      style={{
        border: "1px solid lime",
        textAlign: "left",
        margin: "20px",
        padding: "10px",
      }}
    >
      <h1>Sign up today!</h1>
      <form onSubmit={props.onSubmit}>
        <TextInput
          id="sample"
          label="Sample"
          onChange={props.onChange}
          name="sample"
        />
        <h3>Main form section</h3>

        <h3>Buttons</h3>
        <pre>(fb button needs https so localhost won't show it)</pre>
        <div
          class="fb-login-button"
          data-size="large"
          data-button-type="continue_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
          data-width=""
        ></div>

        <h3>More details</h3>
        <h5>Check if true:</h5>
        <ul style={{ listStyle: "none" }}>
          <li>
            <input type="checkbox" />
            Unemployed
          </li>
          <li>
            <input type="checkbox" />
            Lost Job
          </li>
          <li>
            <input type="checkbox" />
            Homeless
          </li>
          <li>
            <input type="checkbox" />
            Essential Worker
          </li>
          <li>
            <input type="checkbox" />
            Medical Staff
          </li>
          <li>
            <input type="checkbox" />
            Small business owner
          </li>
        </ul>
        <h5>I need money for:</h5>
      </form>
    </div>
  );
};

export default SignupPage;
