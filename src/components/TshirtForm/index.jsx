import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import { getTshirt2 } from "../../assets";

const TshirtForm = () => {
  const [state, handleSubmit, reset] = useForm(import.meta.env.VITE_TSHIRT_FORM_ID);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (state.errors) setError(true);
    if (!error && state.succeeded) setError(false);
  }, [state, error]);

  return (
    <form className="tshirtForm" onSubmit={handleSubmit}>
      <img
        src={getTshirt2}
        alt="Get your free Avirobots t-shirt"
        className="getTshirt"
      />
      <div className="inputsContainer">
        <div className="input">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" required />
          <ValidationError
            field="name"
            errors={state.errors}
            className="error"
          />
        </div>
        <div className="input">
          <label htmlFor="name">Last name *</label>
          <input type="text" id="lastName" name="lastName" required />
          <ValidationError
            field="lastName"
            errors={state.errors}
            className="error"
          />
        </div>
        <div className="input">
          <label htmlFor="email">E-mail *</label>
          <input type="email" id="email" name="email" required />
          <ValidationError
            field="email"
            errors={state.errors}
            className="error"
          />
        </div>
        <div className="input">
          <label htmlFor="phone">Phone number</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div className="input">
          <label htmlFor="country">Country *</label>
          <input type="text" id="country" name="country" required />
        </div>
        <div className="input">
          <label htmlFor="address">Address *</label>
          <input type="text" id="address" name="address" />
          <ValidationError
            field="address"
            errors={state.errors}
            className="error"
          />
        </div>
        <div className="input">
          <label htmlFor="zipCode">ZIP code *</label>
          <input type="text" id="zipCode" name="zipCode" required />
          <ValidationError
            field="zipCode"
            errors={state.errors}
            className="error"
          />
        </div>
        <div className="input message">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
          <ValidationError
            field="message"
            errors={state.errors}
            className="error"
          />
        </div>
        <div className="tshirtInputs">
          <div className="input wanted">
            <label htmlFor="tshirtWanted">T-shirt wanted</label>
            <select name="tshirtWanted" id="tshirtWanted" required>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="input size">
            <label htmlFor="tshirtSize">Size</label>
            <select name="tshirtSize" id="tshirtSize" required>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
        </div>
        <p className="shippingNotice">
          Shipping at <b>no aditional</b> cost.
        </p>
      </div>
      <div className="sendButtonContainer">
        {state.succeeded ? (
          <>
            <p>Thank you for your request, we will reply soon.</p>{" "}
            <button className="button button--outline" onClick={reset}>
              Send another request
            </button>
          </>
        ) : (
          <>
            {error && <p className="error">An error occurred.</p>}
            <button
              type="submit"
              className="button button--solid"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending" : "Send"}
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default TshirtForm;
