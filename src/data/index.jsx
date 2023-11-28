import { CiPizza } from "react-icons/ci";
import { LiaAwardSolid } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";
import { TbMan } from "react-icons/tb";

import { HiPhone, HiLocationMarker } from "react-icons/hi";
import { AiFillShop } from "react-icons/ai";

import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcApplePay,
  FaGooglePay,
} from "react-icons/fa";

//services image
import organicFood from "./image/pizza-1.webp";
import expressDelivery from "./image/pizza-7.webp";
import unforgetableTaste from "./image/pizza-16.webp";

//meals image
import margherita from "./image/Margherita.webp";
import pepperoni from "./image/Pepperoni.webp";
import cheese from "./image/Cheese.webp";
import veggie from "./image/Veggie.webp";
import meat from "./image/Meat.webp";
import BBQChicken from "./image/BBQ_Chicken.webp";

//about pic1
import wineAndTable from "./image/about-wine.webp";
import pizza from "./image/about-pizza.webp";
import cutting from "./image/about-cutting.webp";
import restaurant from "./image/about-restaurant.webp";

//about pic2
import reception from "./image/about-reception.webp";
import bar from "./image/about-bar.webp";
import server from "./image/about-server.webp";
import fineDish from "./image/about-fine-dish.webp";

export const links = [
  { title: "Home", link: "/" },
  { title: "Menu", link: "/menu" },
  { title: "About", link: "/about" },
  { title: "Search", link: "/search" },
];

export const services = [
  {
    title: "Organic Food",
    description:
      "Pure and healthy organic food is our lifestyle. The products we consume has impact on out future and we do everything to keep the future healthy",
    image: organicFood,
  },
  {
    title: "Express Delivery",
    description:
      "Choose from a variety of express delivery services depending on your needs. Whether in a hurry to eat or have some plans tomorrow, we have got you covered",
    image: expressDelivery,
  },
  {
    title: "Unforgetable Taste",
    description:
      "Our goal is to provide our customers with excellent service, great taste and unforgettable experiences. This will be a mind-blowing experience for your taste buds",
    image: unforgetableTaste,
  },
];

export const meals = [
  {
    name: "Margherita",
    description:
      "Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There’s a reason it’s an Italian staple and one of the most popular types of pizza in the country.",
    price: 12,
    image: margherita,
  },
  {
    name: "Pepperoni",
    description:
      "There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?",
    price: 14,
    image: pepperoni,
  },
  {
    name: "Cheese",
    description:
      "It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own.",
    price: 10,
    image: cheese,
  },
  {
    name: "Veggie",
    description:
      "When you want to jazz up your cheese pizza with color and texture, veggies are the perfect topping. And you’re only limited by your imagination.",
    price: 15,
    image: veggie,
  },
  {
    name: "Meat",
    description:
      "If pepperoni just isn’t enough, and you’re looking for a pie with a bit more heft, a meat pizza is a perfect and popular choice.",
    price: 15,
    image: meat,
  },
  {
    name: "BBQ Chicken",
    description:
      "If you love BBQ chicken and you love pizza, why not put them together? This has long been a cult favorite of sports fans and college kids.",
    price: 15,
    image: BBQChicken,
  },
];

export const introductions = [
  {
    title: "Pizza Branches",
    quantity: 50,
    icon: <CiPizza size={64} />,
  },
  {
    title: "Number of Awards",
    quantity: 200,
    icon: <LiaAwardSolid size={64} />,
  },
  {
    title: "Happy Customers",
    quantity: "10,485",
    icon: <VscFeedback size={64} />,
  },
  {
    title: "Staff",
    quantity: 400,
    icon: <TbMan size={64} />,
  },
];

export const contactInfos = [
  {
    id: "phoneNumber",
    icon: <HiPhone />,
    title: "000 (000) 123 4567",
    subText: "Contact us if you have any questions",
  },
  {
    id: "address",
    icon: <HiLocationMarker />,
    title: "506 Roy Alley 80202",
    subText: "Colorado, Denver",
  },
  {
    id: "openTime",
    icon: <AiFillShop />,
    title: "Open Monday-Friday",
    subText: "8:00am - 9:00pm",
  },
];

export const socialMedia = [
  {
    company: "Github",
    icon: <BsGithub size={28} />,
    url: "https://github.com/",
  },
  {
    company: "Facebook",
    icon: <BsFacebook size={28} />,
    url: "https://facebook.com/",
  },
  {
    company: "twitter",
    icon: <FaXTwitter size={28} />,
    url: "https://twitter.com/",
  },
  {
    company: "instagram",
    icon: <BsInstagram size={28} />,
    url: "https://instagram.com/",
  },
];

export const pay = [
  {
    type: "VISA",
    icon: <FaCcVisa size={28} />,
  },
  {
    type: "Master Card",
    icon: <FaCcMastercard size={28} />,
  },
  {
    type: "ApplyPay",
    icon: <FaCcApplePay size={28} />,
  },
  {
    type: "GooglePay",
    icon: <FaGooglePay size={28} />,
  },
];

export const aboutPics1 = [
  {
    name: "wineAndTable",
    url: wineAndTable,
  },
  {
    name: "pizza",
    url: pizza,
  },
  {
    name: "cutting",
    url: cutting,
  },
  {
    name: "restaurant",
    url: restaurant,
  },
];

export const aboutPics2 = [
  {
    name: "reception",
    url: reception,
  },
  {
    name: "bar",
    url: bar,
  },
  {
    name: "server",
    url: server,
  },
  {
    name: "fineDish",
    url: fineDish,
  },
];
