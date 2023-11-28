import SectionContainer from "../ui/SectionContainer";
import ReverseWrapper from "../ui/ReverseWrapper";
import Title from "../ui/Title";
import SubTitle from "../ui/SubTitle";
import SubText from "../ui/SubText";

import join from "../../data/image/about-join.webp";

const Team = () => {
  return (
    <SectionContainer>
      <ReverseWrapper isReverse={false}>
        <div>
          <Title weight="extrabold" size="3xl">
            Join the team
          </Title>
          <SubTitle>Careers</SubTitle>

          <SubText weight="bold" size="lg">
            Are you passionate about great food, exceptional customer service,
            and working with a fun and dynamic team? If so, we would love to
            have you join our team at Pizza Time! We are always on the lookout
            for talented and motivated individuals to join our team in a variety
            of roles, from servers and chefs to kitchen staff and management.
            Whether you&apos;re just starting out in the foodservice industry or
            have years of experience under your belt, we offer a supportive and
            collaborative work environment that encourages personal and
            professional growth.
          </SubText>
        </div>
        <img
          src={join}
          alt="join"
          className="w-full lg:w-1/2 h-72 rounded-xl object-cover object-center"
        />
      </ReverseWrapper>
    </SectionContainer>
  );
};

export default Team;
