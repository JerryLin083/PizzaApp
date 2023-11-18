import { useDispatch, useSelector } from "react-redux";
import {
  addPizza,
  decPizzaQuantity,
  getPizzaId,
  incPizzaQuantity,
} from "../cart/cartSlice";

const useAddToCart = (pizza) => {
  const pizzaInCart = useSelector(getPizzaId(pizza.id));

  const dispatch = useDispatch();

  const handleIncQuantity = (id) => {
    dispatch(incPizzaQuantity(id));
  };

  const handleDecQuantity = (id) => {
    dispatch(decPizzaQuantity(id));
  };

  const handleAdd = () => {
    dispatch(
      addPizza({
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        totalPrice: pizza.price,
        image: pizza.image,
        ingredient: pizza.ingredient,
        quantity: 1,
      })
    );
  };

  return { pizzaInCart, handleIncQuantity, handleDecQuantity, handleAdd };
};

export default useAddToCart;
