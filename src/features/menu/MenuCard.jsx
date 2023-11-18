import { motion } from "framer-motion";
import AddToCart from "./AddToCart";
import { NavLink } from "react-router-dom";

const initial = { opacity: 0, y: -100 };
const whileInView = {
  opacity: 1,
  y: 0,
  transition: { duration: 0.5 },
};
const viewport = { once: true };

const MenuCard = ({ pizza }) => {
  return (
    <motion.li
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      className="mt-8 h-[450px] xl:h-[560px] flex justify-center"
    >
      <div className="flex flex-col gap-4">
        <NavLink to={pizza.id}>
          <img
            src={pizza.image}
            alt={pizza.name}
            className="w-64 h-64 xl:w-96 xl:h-96 rounded-xl object-cover object-center"
          />
        </NavLink>

        <ul className="w-64 xl:w-96 space-y-4">
          <li className="font-semibold text-xl text-orange-400">
            {pizza.name}
          </li>
          <li>{pizza.ingredient}</li>
        </ul>

        <div className="mt-auto w-full flexBetween">
          <span className="text-xl text-yellow-400">
            $ {pizza.sold_out ? "--" : pizza.price}
          </span>
          <AddToCart pizza={pizza} />
        </div>
      </div>
    </motion.li>
  );
};

export default MenuCard;
