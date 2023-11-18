import { motion } from "framer-motion";
import { fadeIn } from "../../data/motion";

const IntroCard = ({ intro }) => {
  return (
    <li className="mb-12 flexCenter flex-col w-full">
      <motion.div
        variants={fadeIn("right", "spring", 2.5, 0)}
        className="flexCenter w-24 h-24 border-2 border-yellow-400"
      >
        {intro.icon}
      </motion.div>
      <p className="mt-8 font-bold text-4xl">{intro.quantity}</p>
      <p className="mt-8 font-bold text-xl">{intro.title}</p>
    </li>
  );
};

export default IntroCard;
