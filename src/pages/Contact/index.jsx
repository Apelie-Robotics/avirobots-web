import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm(
    import.meta.env.VITE_CONTACT_FORM_ID
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    if (state.errors) setError(true);
    if (!error && state.succeeded) setError(false);
  }, [state, error]);

  return (
    <div className="contactPage">
      <div className="bgMask" />
      <div className="contactFormContainer">
        <div className="titles">
          <h1>Contact Us!</h1>
          <p>Let's get in touch!</p>
        </div>
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="inputContainer">
            <label htmlFor="email">E-mail*</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="inputContainer">
            <label htmlFor="phone">Phone number</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="inputContainer">
            <label htmlFor="country">Country*</label>
            <input type="text" id="country" name="country" required />
          </div>
          <div className="inputContainer">
            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message" rows={5}></textarea>
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
      </div>
    </div>
  );
};

export default Contact;
