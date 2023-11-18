import SectionContainer from "../ui/SectionContainer";
import Title from "../ui/Title";
import SubText from "../ui/SubText";

const History = () => {
  return (
    <SectionContainer position="center">
      <Title weight="bold" uppercase={true} top="sm">
        Welcome to{" "}
        <span className="font-EduTAS text-yellow-500">Pizza Time</span>{" "}
        restaurant
      </Title>

      <SubText>
        Founded in 1982 we bring pizza slice by slice to the next level! Unique
        branding and being in the pizza industry is the formula to out success.
        We do understand what people want and convert desires to unique
        experiences of taste. Freshness, orignality and quality is only the
        small part of out priorities. Affortable costs, located almost anywhere
        you go, amazing online operational system to order food in one click.
        Easy to navigate pre-order options and amazing options for corporate
        parties! At Pizaa Time we care about you because you are the one who
        makes us special!
      </SubText>
    </SectionContainer>
  );
};

export default History;
