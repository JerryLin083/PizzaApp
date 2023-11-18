import { BsFillTrashFill } from "react-icons/bs";
import Button from "../ui/Button";
import { useState } from "react";
import DeleteWindow from "../ui/DeleteWindow";
import useAddToCart from "./useAddToCart";

const AddToCart = ({ pizza }) => {
  const [show, setShow] = useState(false);

  const { pizzaInCart, handleIncQuantity, handleDecQuantity, handleAdd } =
    useAddToCart(pizza);

  if (show) return <DeleteWindow id={pizza.id} setShow={setShow} />;

  return (
    <>
      {!pizza.sold_out && pizzaInCart && (
        <div className="flexBetween font-semibold text-xl gap-2">
          <Button type="quantity" onClick={() => handleDecQuantity(pizza.id)}>
            -
          </Button>
          <span>{pizzaInCart.quantity}</span>
          <Button type="quantity" onClick={() => handleIncQuantity(pizza.id)}>
            +
          </Button>
          <Button onClick={() => setShow(true)}>
            <BsFillTrashFill />
          </Button>
        </div>
      )}

      {!pizzaInCart && (
        <Button type="add" disabled={pizza.sold_out} onClick={handleAdd}>
          {pizza.sold_out ? "Sold Out" : "Add to cart"}
        </Button>
      )}
    </>
  );
};

export default AddToCart;
