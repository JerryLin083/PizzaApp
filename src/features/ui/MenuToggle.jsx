import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";

const MenuToggle = ({ isOpen, setIsOpen }) => {
  return (
    <Button type="toggle" onClick={() => setIsOpen((prev) => !prev)}>
      {isOpen ? (
        <HiX size={44} color="white" />
      ) : (
        <HiMenu size={44} color="white" />
      )}
    </Button>
  );
};

export default MenuToggle;
