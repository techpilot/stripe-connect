import { EditStyle } from "../pages/styles";

const PersonalDetails = () => {
  return (
    <EditStyle>
      <div className="text-container">
        <h3 className="title">Personal Info</h3>
        <span>Provide your personal information</span>
      </div>
      <div className="div-container">
        <div className="flex">
          <div className="input-container">
            <span className="form-text">first name</span>
            <div className="form-container margin">
              <input
                type="text"
                className="form-input"
                placeholder="enter your first name"
              />
            </div>
          </div>

          <div className="input-container">
            <span className="form-text">last name</span>
            <div className="form-container">
              <input
                type="text"
                className="form-input"
                placeholder="enter your last name"
              />
            </div>
          </div>
        </div>
        <div className="input-container">
          <span className="form-text">university</span>
          <div className="form-container">
            <input
              type="text"
              className="form-input"
              placeholder="enter the name of your university"
            />
          </div>
        </div>
      </div>
    </EditStyle>
  );
};

export default PersonalDetails;
