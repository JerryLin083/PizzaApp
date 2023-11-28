import { Link } from "react-router-dom";
import { toTop } from "../../data/method";

const Logo = () => {
  return (
    <Link to="/" className="flexCenter gap-4" onClick={toTop}>
      <img
        src="/pizza-slice.webp"
        alt="pizza logo"
        className="w-16 h-16 hover:rotate-45 transition-transform duration-500"
      />
      <p className="flex flex-col font-Playpen font-semibold text-2xl">
        <span>Jerry&apos;s</span>
        <span className="text-yellow-400">Pizza</span>
      </p>
    </Link>
  );
};

export default Logo;
