import {
  Form,
  NavLink,
  Navigate,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import supabase from "../../api/supabase";

import { getUser } from "../user/userSlice";
import Title from "../ui/Title";
import SectionContainer from "../ui/SectionContainer";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Message from "../ui/Message";

const Login = () => {
  const user = useSelector(getUser);
  const message = useActionData();
  const { submitting } = useNavigation();
  const isSubmitting = submitting === "submitting";

  if (user.isAuth === "authenticated")
    return <Navigate to="/menu" replace={true} />;

  return (
    <main className="mt-28">
      <SectionContainer>
        <Title weight="bold" top="md">
          Login
        </Title>

        <Message message={message} />

        <div className="max-w-xl">
          <Form method="POST">
            <Input
              name="email"
              placeholder="Email"
              type="text"
              disabled={isSubmitting}
            />

            <Input
              name="password"
              placeholder="Password"
              type="password"
              disabled={isSubmitting}
            />

            <div className="mt-12 w-full flexBetween">
              <NavLink to="/register" className="signUpButton">
                SIGN UP
              </NavLink>
              <Button type="login" disabled={isSubmitting}>
                LOG IN
              </Button>
            </div>
          </Form>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Login;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return error.message;
  history.go(-1);

  return null;
};
