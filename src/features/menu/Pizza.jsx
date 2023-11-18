import { NavLink, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import supabase from "../../api/supabase";
import SectionContainer from "../ui/SectionContainer";
import { fadeIn } from "../../data/motion";
import AddToCart from "./AddToCart";

const Pizza = () => {
  const [pizza] = useLoaderData();

  return (
    <main className="mt-28">
      <SectionContainer>
        <NavLink to="/menu" className="mb-16 backButton">
          &larr; Back
        </NavLink>

        <motion.div
          variants={fadeIn("right", "", 1, 0)}
          className="flex flex-col md:flex-row gap-6"
        >
          <img src={pizza.image} alt="pizza" className="w-72 h-72 rounded-xl" />

          <ul className="space-y-6 max-w-xs">
            <li className="font-semibold text-2xl text-orange-500">
              {pizza.name}
            </li>
            <li className="text-stone-400">{pizza.ingredient}</li>
            <li className="text-xl text-yellow-400">${pizza.price}</li>
            <li className="w-fit">
              <AddToCart pizza={pizza} />
            </li>
          </ul>
        </motion.div>
      </SectionContainer>
    </main>
  );
};

export default Pizza;

export const loader = async ({ params }) => {
  const { data } = await supabase
    .from("menu")
    .select("id, image, ingredient, name, price, sold_out")
    .eq("id", params.pizza);

  return data;
};
