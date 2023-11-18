import { motion } from "framer-motion";
import { text } from "../../data/motion";

const SubText = ({
  children,
  size = "normal",
  weight = "semibold",
  maxWidth = "lg",
}) => {
  const fontSize = {
    sm: "text-sm",
    normal: "text-normal",
    lg: "text-lg",
    xl: "text-xl",
  };

  const fontWeight = {
    extrabold: " font-extrabold",
    bold: " font-bold",
    semibold: " font-semibold",
  };

  const width = {
    normal: " max-w-3xl",
    lg: " max-w-5xl",
    xl: " max-w-7xl",
    full: " max-w-full",
  };

  return (
    <motion.p
      variants={text()}
      className={`mt-4 ${width[maxWidth]} ${fontWeight[weight]} ${fontSize[size]} text-stone-400`}
    >
      {children}
    </motion.p>
  );
};

export default SubText;
