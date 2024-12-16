const TrialForm = () => {
  return (
    <form className="trialForm">
      <div className="titles">
        <h2>Book a Trial!</h2>
        <p>Let's meet</p>
      </div>

      <div className="inputsContainer">
        <div className="input">
          <label htmlFor="name">Nombre / Name *</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="input">
          <label htmlFor="email">E-mail *</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input">
          <label htmlFor="phone">Celular / Phone number</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div className="input">
          <label htmlFor="country">País / Country *</label>
          <input type="text" id="country" name="country" />
        </div>
        <div className="input">
          <label htmlFor="location">Ubicación / Location *</label>
          <input type="text" id="location" name="location" />
        </div>
        <div className="input">
          <label htmlFor="company">Empresa / Company *</label>
          <input type="text" id="company" name="company" />
        </div>
        <div className="input">
          <label htmlFor="numberOfHouses">
            Número de galpones / Number of houses *
          </label>
          <input type="number" id="numberOfHouses" name="numberOfHouses" />
        </div>
        <div className="dateTimeInputs">
          <div className="input">
            <label htmlFor="dateOfPreference">Date of preference *</label>
            <input type="date" id="dateOfPreference" name="dateOfPreference" />
          </div>
          <div className="input">
            <label htmlFor="timeOfPreference">Time of preference *</label>
            <input type="time" id="timeOfPreference" name="timeOfPreference" />
          </div>
        </div>
        <div className="input">
          <label htmlFor="message">Mensaje / Message *</label>
          <textarea name="message" id="message" rows={4}></textarea>
        </div>
      </div>
      <button type="submit" className="button button--solid">
        Send
      </button>
    </form>
  );
};

export default TrialForm;
