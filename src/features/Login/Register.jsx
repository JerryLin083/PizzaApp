import {
  Form,
  NavLink,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";

import SectionContainer from "../ui/SectionContainer";
import Title from "../ui/Title";
import Button from "../ui/Button";
import Input from "../ui/Input";
import supabase from "../../api/supabase";
import Message from "../ui/Message";

const Register = () => {
  const { submitting } = useNavigation();
  const message = useActionData();
  const isSubmitting = submitting === "submitting";

  return (
    <main className="mt-28">
      <SectionContainer>
        <Title weight="extrabold">Registration</Title>

        <Message message={message} />

        <div className="max-w-xl">
          <Form method="POST">
            <Input
              name="name"
              placeholder="Full name"
              type="text"
              disabled={isSubmitting}
            />
            <Input
              name="email"
              placeholder="Email"
              type="email"
              disabled={isSubmitting}
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              disabled={isSubmitting}
            />
            <Input
              name="repeatPassword"
              placeholder="Repeat password"
              type="password"
              disabled={isSubmitting}
            />
            <Input
              name="address"
              placeholder="Address"
              type="text"
              disabled={isSubmitting}
            />
            <Input
              name="number"
              placeholder="Number"
              type="text"
              disabled={isSubmitting}
            />

            <div className="mt-12 w-full flexBetween">
              <NavLink to="/login" className="backButton">
                &larr; Back
              </NavLink>
              <Button disabled={isSubmitting} type="signUp">
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Register;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  //return error message while password not match
  if (data.password !== data.repeatPassword) {
    return "Passwords don't match";
  }

  //signUp by email and password,
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        fullName: data.name,
        address: data.address,
        number: data.number,
      },
    },
  });

  if (error) {
    return error.message;
  }

  return redirect("/", { replace: true });
};
