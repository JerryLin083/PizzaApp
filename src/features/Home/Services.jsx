import SectionContainer from "../ui/SectionContainer";
import ListPattern from "../ui/ListPattern";
import ServiceCard from "./ServiceCard";
import { services } from "../../data";
import Title from "../ui/Title";
import SubText from "../ui/SubText";

const Services = () => {
  return (
    <SectionContainer position="center" bg="primary">
      <Title>Our Services</Title>

      <SubText>
        Pizza Time provides services across all states - various foods and
        drinks, you choose! What makes us special is our teams of professionals
        with extensive knowledge of all cuisine that we have to offer.
      </SubText>

      <ListPattern
        display="flex"
        data={services}
        render={(service, index) => (
          <ServiceCard index={index} service={service} key={service.title} />
        )}
      />
    </SectionContainer>
  );
};

export default Services;
