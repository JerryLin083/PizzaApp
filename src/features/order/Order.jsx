import { NavLink, useLoaderData } from "react-router-dom";
import supabase from "../../api/supabase";

import SectionContainer from "../ui/SectionContainer";
import Title from "../ui/Title";
import ListPattern from "../ui/ListPattern";
import ToTop from "../ui/ToTop";
import OrderCard from "./OrderCard";
import OrderTotal from "./OrderTotal";
import SubText from "../ui/SubText";

const Order = () => {
  const [data] = useLoaderData();
  const cart = JSON.parse(data.cart);

  return (
    <main className="mt-28">
      <SectionContainer bg="primary">
        <Title size="3xl" uppercase={true}>
          Your order
        </Title>
        <ListPattern
          display="cart"
          data={cart}
          render={(pizza) => <OrderCard pizza={pizza} key={pizza.name} />}
        />

        <OrderTotal totalPrice={data.total_price} />

        <SubText>Order ID: {data.id}</SubText>

        <NavLink to="/menu" className="mt-12 backButton">
          Back to menu
        </NavLink>

        <ToTop />
      </SectionContainer>
    </main>
  );
};

export default Order;

export const loader = async ({ params }) => {
  const { orderId } = params;

  const { data: order, error } = await supabase
    .from("orders")
    .select("id, total_price, cart")
    .eq("id", orderId);

  if (error) console.log(error);

  return order;
};
