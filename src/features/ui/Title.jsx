import { motion } from "framer-motion";
import { fadeIn } from "../../data/motion";

const Title = ({
  weight = "default",
  size = "default",
  uppercase,
  top = "default",
  children,
}) => {
  const fontWeight = {
    default: " ",
    extrabold: " font-extrabold",
    bold: " font-bold",
    semibold: " font-semibold",
  };

  const fontSize = {
    default: " text-5xl",
    sm: " text-sm",
    normal: " text-normal",
    lg: " text-lg",
    xl: " text-xl",
    "3xl": " text-3xl",
  };

  const marginTop = {
    default: " ",
    sm: " mt-4",
    md: " mt-8",
    lg: " mt-12",
    xl: " mt-16",
  };

  return (
    <motion.h1
      variants={fadeIn("down", "spring", 1.5, 0)}
      className={` ${fontWeight[weight]} ${fontSize[size]} ${marginTop[top]} ${
        uppercase ? "uppercase" : ""
      }`}
    >
      {children}
    </motion.h1>
  );
};

export default Title;
