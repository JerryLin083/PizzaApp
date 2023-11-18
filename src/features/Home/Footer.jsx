import ListPattern from "../ui/ListPattern";
import { pay, socialMedia } from "../../data";
import SocialMediaCard from "./SocialMediaCard";
import PayCard from "./PayCard";

const Footer = () => {
  return (
    <footer className="absolute w-full bottom-4 px-12 flexCenter">
      <div className="w-full max-w-7xl hidden  md:flexBetween ">
        <ListPattern
          display="footer"
          data={socialMedia}
          render={(media) => (
            <SocialMediaCard media={media} key={media.company} />
          )}
        />
        <ListPattern
          display="footer"
          data={pay}
          render={(method) => <PayCard method={method} key={method.type} />}
        />
      </div>
    </footer>
  );
};

export default Footer;
