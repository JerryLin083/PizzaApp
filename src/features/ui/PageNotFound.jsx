import { NavLink } from "react-router-dom";

import SectionContainer from "./SectionContainer";
import SubText from "./SubText";
import Title from "./Title";
import Button from "./Button";

const Empty = ({ title }) => {
  return (
    <main className="mt-28">
      <SectionContainer>
        <Title top="lg" weight="extrabold">
          {title}
          <p className="mt-4 font-bold text-xl text-center">
            Oh, no, your cart is empty
          </p>
        </Title>

        <SubText>
          Seems like you have not added anything to your cart yet.
        </SubText>

        <NavLink to="/menu">
          <Button type="menu">Explore menu</Button>
        </NavLink>
      </SectionContainer>
    </main>
  );
};

export default Empty;
