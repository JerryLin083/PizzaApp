import { Form, redirect, useActionData, useNavigation } from "react-router-dom";

import SectionContainer from "../ui/SectionContainer";
import Title from "../ui/Title";
import Input from "../ui/Input";
import supabase from "../../api/supabase";
import Button from "../ui/Button";
import Message from "../ui/Message";

const Search = () => {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  const message = useActionData();

  return (
    <main className="mt-28">
      <SectionContainer>
        <Title>Search</Title>

        <Message message={message} />

        <Form method="POST">
          <Input
            name="id"
            type="text"
            placeholder="Order ID"
            disabled={isSubmitting}
          />

          <div className="mt-8 w-full text-center">
            <Button type="secondary" disabled={isSubmitting}>
              Search
            </Button>
          </div>
        </Form>
      </SectionContainer>
    </main>
  );
};

export default Search;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const { data: order, error } = await supabase
    .from("orders")
    .select("id")
    .eq("id", data.id);

  if (error) return "Could not find your order";

  return redirect(`/order/${order[0].id}`);
};
