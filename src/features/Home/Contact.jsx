import SectionContainer from "../ui/SectionContainer";
import ListPattern from "../ui/ListPattern";
import ContactCard from "./ContactCard";
import { contactInfos } from "../../data";

const Contact = () => {
  return (
    <SectionContainer position="center">
      <div className="w-full h-56 lg:h-96 bg-restaurant bg-cover" />

      <ListPattern
        data={contactInfos}
        render={(info) => <ContactCard info={info} key={info.id} />}
      />
    </SectionContainer>
  );
};

export default Contact;
