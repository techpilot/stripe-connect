import { EditStyle } from "../pages/styles";

const Resume = () => {
  return (
    <EditStyle className="center">
      <div className="text-container">
        <h3 className="title">Resume Upload</h3>
      </div>

      <div className="div-container">
        <div className="form-container" style={{ padding: "0.5rem" }}>
          <input
            type="file"
            className="form-input"
            placeholder="years of expertise"
          />
        </div>
      </div>
    </EditStyle>
  );
};

export default Resume;
