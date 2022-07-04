import PersonalDetails from "../components/PersonalDetails";
import ProfessionalDetails from "../components/ProfessionalDetails";
import SocialLinks from "../components/SocialLinks";
import Resume from "../components/Resume";
import { LgContainer } from "./styles";

const EditPage = () => {
  return (
    <LgContainer>
      <PersonalDetails />
      <ProfessionalDetails />
      <SocialLinks />
      <Resume />
    </LgContainer>
  );
};

export default EditPage;
