import ToTop from "../ui/ToTop";
import Introduction from "./Introduction";
import Dedicated from "./Dedicated";
import Feedback from "./Feedback";
import Team from "./Team";
import Business from "./Business";

const About = () => {
  return (
    <main className="mt-28">
      <Introduction />
      <Dedicated />
      <Feedback />
      <Team />
      <Business />
      <ToTop />
    </main>
  );
};

export default About;
