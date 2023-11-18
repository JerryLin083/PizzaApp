import SectionContainer from "../ui/SectionContainer";
import Title from "../ui/Title";
import SubTitle from "../ui/SubTitle";
import SubText from "../ui/SubText";

const Feedback = () => {
  return (
    <SectionContainer>
      <Title weight="extrabold" size="3xl">
        Over 16000 positive feedback
      </Title>
      <SubTitle>Happy Customers</SubTitle>
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
      <div className="mt-8 relative bg-aboutPizza h-72 w-full bg-center bg-cover">
        <div className="absolute inset-0 bg-transparentSeconday" />
      </div>
    </SectionContainer>
  );
};

export default Feedback;
