import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import SectionContainer from "../ui/SectionContainer";
import Button from "../ui/Button";
import { fadeIn } from "../../data/motion";
import { toTop } from "../../data/method";
import SubTitle from "../ui/SubTitle";

const Welcome = () => {
  return (
    <SectionContainer position="center" bg="home" height="xl">
      <div className="absolute inset-0 flexCenter flex-col bg-transparent">
        <motion.div variants={fadeIn("left", "", 2.5, 0)}>
          <SubTitle>Welcome</SubTitle>
          <h1 className="mt-2 font-bold text-5xl uppercase ">
            try something amazing
          </h1>
          <h3 className="mt-4 px-4 font-semibold text-xl">
            Ordering your fave Pizza is quick and easy with our app or on our
            website.
          </h3>
        </motion.div>

        <NavLink to="/menu">
          <Button onClick={toTop} type="menu">
            View Menu
          </Button>
        </NavLink>
      </div>
    </SectionContainer>
  );
};

export default Welcome;
