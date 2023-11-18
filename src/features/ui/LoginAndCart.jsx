import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

import { clearUser, getUser } from "../user/userSlice";
import { getCart } from "../cart/cartSlice";
import supabase from "../../api/supabase";

import Button from "./Button";
import { toTop } from "../../data/method";

const LoginAndCart = ({ setIsOpen }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const cart = useSelector(getCart);

  const handleClick = () => {
    setIsOpen(false);
    toTop();
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      setIsOpen(false);
      toTop();
      dispatch(clearUser());
      navigate("/", { replace: true });
    }
  };

  return (
    <li className="flexCenter gap-10">
      <NavLink to="/login">
        {user.isAuth === "authenticated" ? (
          <Button type="logout" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button onClick={handleClick} type="login">
            Log in
          </Button>
        )}
      </NavLink>

      <NavLink to="/cart">
        <Button type="cart" onClick={handleClick}>
          <HiOutlineShoppingCart />
          Cart ({cart.length})
        </Button>
      </NavLink>
    </li>
  );
};

export default LoginAndCart;
