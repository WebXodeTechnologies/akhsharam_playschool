
import HeroBody from "@/app/components/heroBody";
import BodyCTA from "@/app/components/BodyCTA";
import ImageBody from "@/app/components/ImageBody";
import AboutText from "../app/components/AboutText";
import Whatwedo from "../app/components/What.jsx";
import OurServices from "@/app/components/OurServices";
import RecentNews from "@/app/components/RecentNews";
import Testimonial from "./components/Testimonial";
import AnimatedTooltip from "./components/AmimatedTooltip";
import Video from "./components/Video"

export default function Home() {
  return (
    <div className="">
      <HeroBody />
      <BodyCTA />
      <ImageBody />
      <AboutText />
      <Whatwedo />
      <Video />
      <OurServices />
      <RecentNews />
      <AnimatedTooltip />
      <Testimonial />
    </div>
  );
}
