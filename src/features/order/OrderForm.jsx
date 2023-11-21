import {
  Form,
  NavLink,
  Navigate,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import supabase from "../../api/supabase";
import { useSelector } from "react-redux";

import store from "../../store";
import { getUser } from "../user/userSlice";
import { getCart, clearCart, getTotalPrice } from "../cart/cartSlice";

import Input from "../ui/Input";
import Button from "../ui/Button";
import SectionContainer from "../ui/SectionContainer";
import Title from "../ui/Title";
import Empty from "../ui/PageNotFound";
import Message from "../ui/Message";

const OrderForm = () => {
  const message = useActionData();
  const { submitting } = useNavigation();
  const isSubmitting = submitting === "submitting";

  const user = useSelector(getUser);
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalPrice);

  if (user.isAuth !== "authenticated")
    return <Navigate to="/login" replace={true} />;

  if (!cart.length) return <Empty />;

  return (
    <main className="mt-28">
      <SectionContainer>
        <Title size="3xl" top="md">
          Ready to order? Let&apos;s go!
        </Title>

        <Message message={message} />

        <div className="max-w-xl">
          <Form method="POST">
            <Input
              name="name"
              defaultValue={user.name}
              placeholder="Full name"
              type="text"
              disabled={isSubmitting}
            />

            <Input
              name="email"
              defaultValue={user.email}
              placeholder="email"
              type="email"
              disabled={isSubmitting}
            />

            <Input
              name="number"
              defaultValue={user.number}
              placeholder="Number"
              type="text"
              disabled={isSubmitting}
            />

            <Input
              name="address"
              defaultValue={user.address}
              placeholder="Address"
              type="text"
              disabled={isSubmitting}
            />

            <Input
              name="cart"
              type="hidden"
              defaultValue={JSON.stringify(cart)}
            />
            <Input name="totalPrice" type="hidden" defaultValue={totalPrice} />

            <div className="mt-12 w-full flexBetween">
              <NavLink to="/cart" className="backButton">
                Back to cart
              </NavLink>
              <Button type="order" disabled={isSubmitting}>
                Order Now
              </Button>
            </div>
          </Form>
        </div>
      </SectionContainer>
    </main>
  );
};

export default OrderForm;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  //get user id
  const {
    data: { user },
  } = await supabase.auth.getUser();

  //start order
  const { data: orderData, error } = await supabase
    .from("orders")
    .insert([
      {
        user_id: user.id,
        user_email: data.email,
        total_price: data.totalPrice,
        number: data.number,
        address: data.address,
        cart: data.cart,
      },
    ])
    .select("id");

  if (error) return error.message;

  //clear items in cart
  store.dispatch(clearCart());

  return redirect(`/order/${orderData[0].id}`);
};
