import { motion } from "framer-motion";
import { fadeIn } from "../../data/motion";

const MealCard = ({ index, meal }) => {
  return (
    <motion.li
      variants={fadeIn("up", "", 0.75, index * 0.4)}
      className="mt-8 sm:mt-0"
    >
      <div className="flexCenter flex-col gap-4 sm:flex-row">
        <img
          src={meal.image}
          alt="pizza"
          className="w-64 h-64 sm:w-40 sm:h-40 rounded-xl bg-contain"
        />
        <div className="max-w-[300px] text-left">
          <h5>{meal.name}</h5>
          <p className="mt-2 text-xs text-stone-400 ">{meal.description}</p>
          <p className="mt-4 text-yellow-500">$ {meal.price}</p>
        </div>
      </div>
    </motion.li>
  );
};

export default MealCard;
