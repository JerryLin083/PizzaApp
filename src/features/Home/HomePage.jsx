import { motion } from "framer-motion";

import Welcome from "./Welcome";
import History from "./History";
import Contact from "./Contact";
import Services from "./Services";
import Meals from "./Meals";
import Intro from "./Intro";
import Map from "./Map";
import ToTop from "../ui/ToTop";

const HomePage = () => {
  return (
    <motion.main className="mt-28">
      <Welcome />
      <History />
      <Contact />
      <Services />
      <Meals />
      <Intro />
      <Map />
      <ToTop />
    </motion.main>
  );
};

export default HomePage;
