import { BsArrowUpCircle } from "react-icons/bs";
import Button from "./Button";
import useToTop from "../../hooks/useToTop";

const ToTop = () => {
  const { show, handleClick } = useToTop();

  if (!show) return null;

  return (
    <div className="fixed right-8 md:right-16 bottom-16 opacity-50">
      <Button onClick={handleClick}>
        <BsArrowUpCircle size={32} />
      </Button>
    </div>
  );
};

export default ToTop;
