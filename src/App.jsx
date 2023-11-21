import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout, { loader as appLayoutLoader } from "./features/ui/AppLayout";
import HomePage from "./features/Home/HomePage";
import About from "./features/about/About";
import Search, { action as searchAction } from "./features/search/Search";

import Cart from "./features/cart/Cart";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Pizza, { loader as pizzaLoader } from "./features/menu/Pizza";
import Login, { action as loginAction } from "./features/Login/Login";
import Register, { action as registerAction } from "./features/Login/Register";
import Order, { loader as orderLoader } from "./features/order/Order";
import OrderForm, {
  action as orderFormAction,
} from "./features/order/OrderForm";
import PageNotFound from "./features/ui/Error";
import Error from "./features/ui/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      loader: appLayoutLoader,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "search",
          element: <Search />,
          action: searchAction,
        },
        {
          path: "menu",
          element: <Menu />,
          loader: menuLoader,
        },
        {
          path: "menu/:pizza",
          element: <Pizza />,
          loader: pizzaLoader,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "order/new",
          element: <OrderForm />,
          action: orderFormAction,
        },
        {
          path: "order/:orderId",
          element: <Order />,
          loader: orderLoader,
        },
        {
          path: "login",
          element: <Login />,
          action: loginAction,
        },
        {
          path: "register",
          element: <Register />,
          action: registerAction,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
