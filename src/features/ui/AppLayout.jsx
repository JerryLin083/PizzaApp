import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Home/Footer";
import Loader from "./Loader";
import supabase from "../../api/supabase";
import store from "../../store";
import { createUser } from "../user/userSlice";

const AppLayout = () => {
  const { state } = useNavigation();

  return (
    <>
      <Navbar />
      {state === "loading" ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
};

export default AppLayout;

export const loader = async () => {
  //get session from localstorage while render happen
  const {
    data: { session },
  } = await supabase.auth.getSession();

  //if not authenticated return null
  if (!session) return null;

  //if authenticated fetch user data from supabase
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  //assign user data to user state
  store.dispatch(
    createUser({
      isAuth: user.role,
      email: user.email,
      name: user.user_metadata.fullName,
      number: user.user_metadata.number,
      address: user.user_metadata.address,
    })
  );

  return null;
};
