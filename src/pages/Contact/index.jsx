import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const params = {
      to_name: "Apelie",
      from_name: name,
      reply_to: email,
      phone: phone,
      country: country,
      message: message,
    };

    emailjs
      .send("service_2g0x54a", "template_wxlht9t", params, "TIAfrFq1fUxg4P1TZ")
      .then(
        (res) => {
          alert("Success!", res.status, res.text);
          setLoading(false);
          setName("");
          setEmail("");
          setPhone("");
          setCountry("");
          setMessage("");
        },
        (error) => {
          alert("Error: ", error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contactPage">
      <div className="contactFormContainer">
        <h1>Contact Us!</h1>
        <span>Let's get in touch!</span>
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="inputContainer name">
            <label htmlFor="name">Nombre / Name*</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer email">
            <label htmlFor="email">E-mail*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer phone">
            <label htmlFor="phone">Celular / Phone number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) =>
                !isNaN(e.target.value) && setPhone(e.target.value)
              }
            />
          </div>
          <div className="inputContainer country">
            <label htmlFor="country">País / Country*</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer message">
            <label htmlFor="message">Mensaje / Message*</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <input
            type="submit"
            value={loading ? "Sending, please wait" : "Send"}
            className="button button--solid"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
