import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getCart } from "./cartSlice";
import Empty from "../ui/PageNotFound";
import SectionContainer from "../ui/SectionContainer";
import Title from "../ui/Title";
import ListPattern from "../ui/ListPattern";
import CartCard from "./CartCard";

import Total from "./Total";
import ToTop from "../ui/ToTop";

const Cart = () => {
  const cart = useSelector(getCart);

  if (!cart.length) return <Empty title="Shopping cart" />;

  return (
    <main className="mt-28">
      <SectionContainer bg="primary">
        <Title weight="extrabold">Your cart</Title>
        <ListPattern
          display="cart"
          data={cart}
          render={(pizza) => <CartCard pizza={pizza} key={pizza.name} />}
        />

        <Total />

        <div className="w-full mt-4 pt-8 flexCenter gap-12 border-t border-stone-600">
          <NavLink to="/menu" className="backButton hidden md:block">
            Back to menu
          </NavLink>
          <NavLink to="/order/new" className="orderButton">
            Order Now
          </NavLink>
        </div>

        <ToTop />
      </SectionContainer>
    </main>
  );
};

export default Cart;
