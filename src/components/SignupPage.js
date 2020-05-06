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
        {/*
        <TextInput
          id="sample"
          label="Sample"
          onChange={props.onChange}
          name="sample"
        />
      */}
        <h3>Quick sign up</h3>

        <ul
          style={{
            listStyle: "none",
            display: "flex" /*,
            justifyContent: "space-around",*/,
          }}
        >
          <li>
            <input type="radio" name="paytype" />
            Facebook pay
          </li>
          <li>
            <input type="radio" name="paytype" />
            Venmo
          </li>
        </ul>
        <TextInput
          id="payaccount"
          label="Subsequent placeholder for payment information (I don't know the specifics of venmo api or fbpay at this moment)"
          onChange={props.onChange}
          name="payaccount"
        />

        <input type="checkbox" />
        <label for="isAnon"> I would like to remain anonymous</label>

        <h3>Buttons</h3>
        <button>Sign up</button>
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

        <hr />

        <h3>/end quick sign up... More details</h3>
        <h5>Check if true:</h5>
        <ul style={{ listStyle: "none", display: "flex" }}>
          <li>
            <input type="radio" name="jobstatus" />
            Unemployed
          </li>
          <li>
            <input type="radio" name="jobstatus" />
            Lost Job
          </li>
          <li>
            <input type="radio" name="jobstatus" />
            Homeless
          </li>
          <li>
            <input type="radio" name="jobstatus" />
            None of these
          </li>
        </ul>
        <ul id="radio2" style={{ listStyle: "none", display: "none" }}>
          <li>
            <input type="radio" name="jobclass" />
            Essential Worker
          </li>
          <li>
            <input type="radio" name="jobclass" />
            Medical Staff
          </li>
          <li>
            <input type="radio" name="jobclass" />
            Small business owner
          </li>
          <li>
            <input type="radio" name="jobclass" />
            None of these
          </li>
        </ul>
        <h5>I need money for:</h5>
        <TextInput
          id="reason"
          label="I need money for:"
          onChange={props.onChange}
          name="reason"
        />
      </form>
    </div>
  );
};

export default SignupPage;
