import { EditStyle } from "../pages/styles";

const SocialLinks = () => {
  return (
    <EditStyle>
      <div className="text-container">
        <h3 className="title">Social Links</h3>
        <span>Provide your social media links</span>
      </div>
      <div className="div-container">
        <div className="flex">
          <div className="input-container">
            <span className="form-text">facebook</span>
            <div className="form-container margin">
              <input
                type="text"
                className="form-input"
                placeholder="paste facebook profile link"
              />
            </div>
          </div>
          <div className="input-container">
            <span className="form-text">twitter</span>
            <div className="form-container">
              <input
                type="text"
                className="form-input"
                placeholder="paste twitter profile link"
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="input-container">
            <span className="form-text">linkedIn</span>
            <div className="form-container margin">
              <input
                type="text"
                className="form-input"
                placeholder="paste linkedin profile link"
              />
            </div>
          </div>
          <div className="input-container">
            <span className="form-text">instagram</span>
            <div className="form-container">
              <input
                type="text"
                className="form-input"
                placeholder="paste instagram profile link"
              />
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="input-container">
            <span className="form-text">website</span>
            <div className="form-container margin">
              <input
                type="text"
                className="form-input"
                placeholder="paste the link to website"
              />
            </div>
          </div>

          <div className="input-container">
            <span className="form-text">youtube</span>
            <div className="form-container">
              <input
                type="text"
                className="form-input"
                placeholder="paste your youtube channel"
              />
            </div>
          </div>
        </div>
      </div>
    </EditStyle>
  );
};

export default SocialLinks;
