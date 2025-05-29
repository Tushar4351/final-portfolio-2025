import { HomeHeader, SectionHeading } from "@/components/common/Headers";
import {
  SocialLinksBottom,
  SocialLinksTop,
} from "@/components/common/SocialLinks";
import Services from "@/components/homepage/Services";
import Skill from "@/components/homepage/Skill";
import Slider from "@/components/homepage/slider/Slider";
import MainLayout from "@/components/layouts/MainLayout";
import TwoColumnLayout from "@/components/layouts/TwoColumnLayout";

export default function Home() {
  return (
    <MainLayout>
      <TwoColumnLayout left={<Slider />}>
        <div className="md:grid md:grid-cols-5 gap-2">
          <div className="md:col-span-3">
            <HomeHeader />
          </div>
          <div className="md:col-span-2">
            <SocialLinksTop />
          </div>
        </div>
        <SectionHeading title="Services" />
        <div id="services">
          <Services />
        </div>
        <SectionHeading title="Projects" link="View All" />
        {/* <Project /> */}
        <SectionHeading title="Skills" />
        <div id="skills">
          <Skill />
        </div>

        <SocialLinksBottom />
      </TwoColumnLayout>
    </MainLayout>
  );
}
