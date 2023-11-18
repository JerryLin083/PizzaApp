import SectionContainer from "../ui/SectionContainer";
import Title from "../ui/Title";
import SubTitle from "../ui/SubTitle";
import SubText from "../ui/SubText";
import ListPattern from "../ui/ListPattern";
import { aboutPics2 } from "../../data";
import PicCard from "./PicCard";

const Dedicated = () => {
  return (
    <SectionContainer>
      <Title weight="extrabold" size="3xl">
        Changing the world together
      </Title>
      <SubTitle>Dedicated</SubTitle>
      <SubText weight="bold" size="lg">
        We believe that our success is due to our commitment to providing
        high-quality food and exceptional service. Our menu features a wide
        range of delicious pizzas, salads, sandwiches, pasta dishes, and more,
        all made with fresh, locally sourced ingredients. We take great care to
        ensure that each dish is prepared with the utmost attention to detail,
        so that every bite is as delicious as the last. We also understand that
        great food is only part of the equation. That&apos;s why we place a
        strong emphasis on delivering exceptional service to every customer who
        walks through our doors. Our team of dedicated staff members is
        committed to providing a warm, welcoming atmosphere that makes every
        guest feel like they are part of the family.
      </SubText>
      <ListPattern
        data={aboutPics2}
        display="grid"
        render={(pic) => <PicCard pic={pic} key={pic.name} />}
      />
    </SectionContainer>
  );
};

export default Dedicated;
