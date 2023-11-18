import { useEffect, useRef } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { clearCart, deletePizza } from "../cart/cartSlice";

const DeleteWindow = ({ id, setShow }) => {
  const ref = useRef();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (id) {
      dispatch(deletePizza(id));
      setShow(false);
    } else {
      dispatch(clearCart());
      setShow(false);
    }
  };

  useEffect(() => {
    const clickOutsideWindow = (e) => {
      if (!ref.current.contains(e.target)) setShow(false);
    };

    document.addEventListener("click", clickOutsideWindow, true);

    return () =>
      document.removeEventListener("click", clickOutsideWindow, true);
  }, [setShow]);

  return (
    <div ref={ref} className="space-x-4">
      <Button type="delete" onClick={handleClick}>
        Delete
      </Button>
      <Button type="secondary" onClick={() => setShow(false)}>
        Cancel
      </Button>
    </div>
  );
};

export default DeleteWindow;
