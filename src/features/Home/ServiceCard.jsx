import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../data/motion";

const ServiceCard = ({ service, index }) => {
  return (
    <motion.li
      variants={fadeIn("left", "", 1, index * 1)}
      className="mt-8 lg:mx-8"
    >
      <Tilt className="w-72 h-[360px] p-3 flexCenter flex-col border border-yellow-300 rounded-2xl">
        <img
          src={service.image}
          alt="pizzaPic"
          className="w-40 h-40 rounded-full"
        />
        <h3 className="font-semibold text-2xl">{service.title}</h3>
        <p className="text-sm text-stone-400">{service.description}</p>
      </Tilt>
    </motion.li>
  );
};

export default ServiceCard;
