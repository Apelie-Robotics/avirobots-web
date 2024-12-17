import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

const TrialForm = () => {
  const [state, handleSubmit, reset] = useForm(
    import.meta.env.VITE_CONTACT_FORM_ID
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    if (state.errors) setError(true);
    if (!error && state.succeeded) setError(false);
  }, [state, error]);

  return (
    <form className="trialForm" onSubmit={handleSubmit}>
      <div className="titles">
        <h2>Book your Trial today!</h2>
        <p>
          Currently available only in{" "}
          <b>
            <i>Canada</i>
          </b>{" "}
          and the{" "}
          <b>
            <i>USA</i>
          </b>
          .
        </p>
      </div>

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
          <select name="country" id="country" required>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="input">
          <label htmlFor="location">Location *</label>
          <input type="text" id="location" name="location" required />
          <ValidationError
            field="location"
            errors={state.errors}
            className="error"
          />
        </div>
        <div className="input">
          <label htmlFor="company">Company *</label>
          <input type="text" id="company" name="company" required />
          <ValidationError
            field="company"
            errors={state.errors}
            className="error"
          />
        </div>
        <div className="input">
          <label htmlFor="numberOfHouses">Number of houses *</label>
          <input
            type="number"
            id="numberOfHouses"
            name="numberOfHouses"
            required
          />
          <ValidationError
            field="numberOfHouses"
            errors={state.errors}
            className="error"
          />
        </div>
        <div className="dateTimeInputs">
          <div className="input">
            <label htmlFor="dateOfPreference">Date of preference *</label>
            <input
              type="date"
              id="dateOfPreference"
              name="dateOfPreference"
              required
            />
          </div>
          <div className="input">
            <label htmlFor="timeOfPreference">Time of preference *</label>
            <input
              type="time"
              id="timeOfPreference"
              name="timeOfPreference"
              required
            />
          </div>
        </div>
        <ValidationError
          field="dateOfPreference"
          errors={state.errors}
          className="error"
        />
        <ValidationError
          field="timeOfPreference"
          errors={state.errors}
          className="error"
        />
        <div className="input">
          <label htmlFor="message">Message *</label>
          <textarea name="message" id="message" rows={4} required></textarea>
          <ValidationError
            field="message"
            errors={state.errors}
            className="error"
          />
        </div>
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
            {error && <p className="error">Ha ocurrido un error.</p>}
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

export default TrialForm;
