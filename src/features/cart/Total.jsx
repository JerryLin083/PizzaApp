import { useSelector } from "react-redux";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import Button from "../ui/Button";
import { useState } from "react";
import DeleteWindow from "../ui/DeleteWindow";

const Total = () => {
  const [show, setShow] = useState(false);
  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="mt-12 w-full flexCenter flex-col gap-2">
      <p className="w-56 flexBetween">
        <span className="text-xl text-stone-400">Quantity: </span>
        <span className="text-2xl text-yellow-500">{totalQuantity}</span>
      </p>
      <p className="w-56 flexBetween">
        <span className="text-xl text-stone-400">Total: </span>
        <span className="text-2xl text-yellow-500">${totalPrice}</span>
      </p>

      {show ? (
        <div className="text-center space-y-2">
          <span className="text-red-500">Do you want to remove all items?</span>
          <DeleteWindow setShow={setShow} />
        </div>
      ) : (
        <Button type="primary" onClick={() => setShow(true)}>
          Remove all items from the cart
        </Button>
      )}
    </div>
  );
};

export default Total;
