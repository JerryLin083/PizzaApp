import SectionContainer from "../ui/SectionContainer";
import ListPattern from "../ui/ListPattern";
import IntroCard from "./IntroCard";
import { introductions } from "../../data";

const Intro = () => {
  return (
    <SectionContainer bg="intro" bgTransparent={true}>
      <ListPattern
        display="grid"
        data={introductions}
        render={(intro) => <IntroCard intro={intro} key={intro.title} />}
      />
    </SectionContainer>
  );
};

export default Intro;
