import { motion } from "framer-motion";
import { fadeIn } from "../../data/motion";

const PicCard = ({ pic }) => {
  return (
    <motion.div variants={fadeIn("", "", 1.25, 0)}>
      <img
        src={pic.url}
        alt={pic.name}
        className="w-full h-64 object-cover object-center"
      />
    </motion.div>
  );
};

export default PicCard;
