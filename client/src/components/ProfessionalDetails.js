import { EditStyle } from "../pages/styles";

const ProfessionalDetails = () => {
  return (
    <EditStyle>
      <div className="text-container">
        <h3 className="title">Professional Info</h3>
        <span>Provide your professional information</span>
      </div>
      <div className="div-container">
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <select
            name="pets"
            id="pet-select"
            className="select-container"
            style={{ flexGrow: 0.45 }}
          >
            <option value="">area of expertise</option>
            <option value="tutoring">Academic Tutoring</option>
            <option value="career">Academic/Career Advice</option>
            <option value="computer">Computer Skills</option>
            <option value="forum">Discussion Forum</option>
            <option value="languages">Languages</option>
            <option value="music">Music</option>
            <option value="sports">Sports/Fitness</option>
            <option value="trade">Trade Skills</option>
            <option value="travel">Travel Advice</option>
          </select>

          <select
            name="pets"
            id="pet-select"
            className="select-container"
            style={{ flexGrow: 0.5 }}
          >
            <option value="">category of expertise</option>
            <option value="accounting">Accounting</option>
            <option value="finance">Accounting Finance</option>
            <option value="business">Business Gurus</option>
            <option value="education">Education</option>
            <option value="health">Health Medicine</option>
            <option value="investments">Investments</option>
            <option value="law">Legal Law</option>
            <option value="prep">SAT ACT Prep</option>
            <option value="writing">Writing</option>
          </select>
        </div>

        <div className="input-container">
          <span className="form-text">experience</span>
          <div className="form-container">
            <input
              type="number"
              min={1}
              className="form-input"
              placeholder="years of expertise"
            />
          </div>
        </div>

        <div className="input-container">
          <span className="form-text">focus of expertise</span>
          <div className="form-container">
            <input
              type="text"
              className="form-input"
              placeholder="enter the areas you are focused on"
            />
          </div>
        </div>
      </div>
    </EditStyle>
  );
};

export default ProfessionalDetails;
