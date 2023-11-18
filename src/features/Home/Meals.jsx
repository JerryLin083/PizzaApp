import { NavLink } from "react-router-dom";

import SectionContainer from "../ui/SectionContainer";
import ListPattern from "../ui/ListPattern";
import Button from "../ui/Button";
import { meals } from "../../data";
import MealCard from "./MealCard";
import Title from "../ui/Title";
import SubText from "../ui/SubText";
import { toTop } from "../../data/method";

const Meals = () => {
  return (
    <SectionContainer position="center" bg="primary">
      <Title>Hot Pizza Meals</Title>

      <SubText>
        Pizza Time holds the market of the pizza industry and continuously
        offers more than pizza. Check out our hottest menu options with cheese,
        meat, chicken and veggies!
      </SubText>

      <ListPattern
        display="flex"
        data={meals}
        render={(meal, index) => (
          <MealCard index={index} meal={meal} key={meal.name} />
        )}
      />

      <NavLink to="/menu">
        <Button onClick={toTop} type="menu">
          More Pizza
        </Button>
      </NavLink>
    </SectionContainer>
  );
};

export default Meals;
