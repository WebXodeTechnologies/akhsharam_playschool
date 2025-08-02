
import HeroBody from "@/app/components/heroBody";
import BodyCTA from "@/app/components/BodyCTA";
import ImageBody from "@/app/components/ImageBody";
import AboutUsText from "@/app/components/AboutUsText";
import Whatwedo from "@/app/components/Whatwedo";
import OurServices from "@/app/components/OurServices";
import RecentNews from "@/app/components/RecentNews";

export default function Home() {
  return (
    <div className="">
      <HeroBody />
      <BodyCTA />
      <ImageBody />
      <AboutUsText />
      <Whatwedo />
      <OurServices />
      <RecentNews />
    </div>
  );
}
