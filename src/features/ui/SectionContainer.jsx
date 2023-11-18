import { motion } from "framer-motion";

const SectionContainer = ({
  children,
  display = "col",
  position = "left",
  height = "auto",
  bg = "default",
  bgTransparent = false,
}) => {
  const direction = {
    row: " flex-col lg:flex-row",
    col: "flex-col",
  };

  const backgroundImage = {
    default: " bg-none",
    primary: " bg-black",
    home: " bg-homeBG bg-cover bg-center",
    intro: " bg-restaurant2 bg-cover bg-center",
  };

  const heightSetting = {
    sm: " h-40",
    md: " h-64",
    xl: " h-96",
    auto: " h-auto",
  };

  const styles =
    ` ${bgTransparent ? "" : "py-12 paddingX"} relative w-full flexCenter ${
      direction[display]
    } ` +
    `text-${position} ` +
    backgroundImage[bg] +
    heightSetting[height];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ hidden: {}, show: { transition: {} } }}
      className={styles}
    >
      {children}
    </motion.section>
  );
};

export default SectionContainer;
