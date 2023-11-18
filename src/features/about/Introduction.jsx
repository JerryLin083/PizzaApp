import SectionContainer from "../ui/SectionContainer";
import Title from "../ui/Title";
import SubTitle from "../ui/SubTitle";
import SubText from "../ui/SubText";
import ListPattern from "../ui/ListPattern";
import { aboutPics1 } from "../../data";
import PicCard from "./PicCard";

const Introduction = () => {
  return (
    <SectionContainer>
      <Title weight="extrabold" uppercase={true}>
        About us
      </Title>

      <SubTitle>More than delicious food</SubTitle>

      <SubText weight="bold" size="lg" maxWidth="xl">
        Founded in 1982 we bring pizza slice by slice to the next level! Unique
        branding and being in the pizza industry is the formula to out success.
        We do understand what people want and convert desires to unique
        experiences of taste. Freshness, orignality and quality is only the
        small part of out priorities. Affortable costs, located almost anywhere
        you go, amazing online operational system to order food in one click.
        Easy to navigate pre-order options and amazing options for corporate
        parties! At Pizza Time we care about you because you are the one who
        makes us special! The Pizza Time project was made with love for pizza by
        Ekaterine Mitagvaria.
      </SubText>
      <ListPattern
        data={aboutPics1}
        display="grid"
        render={(pic) => <PicCard pic={pic} key={pic.name} />}
      />
    </SectionContainer>
  );
};

export default Introduction;
