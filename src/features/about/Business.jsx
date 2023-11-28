import SectionContainer from "../ui/SectionContainer";
import ReverseWrapper from "../ui/ReverseWrapper";
import Title from "../ui/Title";
import SubTitle from "../ui/SubTitle";
import SubText from "../ui/SubText";

import office from "../../data/image/about-office.webp";

const Business = () => {
  return (
    <SectionContainer>
      <ReverseWrapper>
        <div>
          <Title weight="extrabold" size="3xl">
            Join the business
          </Title>
          <SubTitle>Collaboration</SubTitle>

          <SubText weight="bold" size="lg">
            Whether it&apos;s catering for a corporate event, providing lunch
            for a business meeting, or simply offering a delicious meal for
            employees to enjoy, we are committed to meeting the unique needs of
            businesses in our area. Our menu features a wide range of options,
            from classic pizzas and salads to sandwiches and pasta dishes, so
            you can be sure there&apos;s something for everyone to enjoy.
            Don&apos;t forget, Pizza Time is a fictional pizza restaurant made
            by Ekaterine Mitagvaria.
          </SubText>
        </div>
        <img
          src={office}
          alt="join"
          className="w-full lg:w-1/2 h-72 rounded-xl object-cover object-center"
        />
      </ReverseWrapper>
    </SectionContainer>
  );
};

export default Business;
