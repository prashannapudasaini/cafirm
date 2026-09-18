import AboutHero from '../components/about/AboutHero';
import FirmStory from '../components/about/FirmStory';
import VisionMission from '../components/about/VisionMission';
import WhyWeExist from '../components/about/WhyWeExist';
import LeadershipTeam from '../components/about/LeadershipTeam';
import CoreValues from '../components/about/CoreValues';
import OurProcess from '../components/about/OurProcess';
import Achievements from '../components/about/Achievements';
import AboutIndustries from '../components/about/AboutIndustries';
import Certifications from '../components/about/Certifications';
import FinalCTA from '../components/home/FinalCTA';

export default function About() {
  return (
    <div className="bg-white dark:bg-[#031B4E] min-h-screen">
      <AboutHero />
      <FirmStory />
      <VisionMission />
      <WhyWeExist />
      <LeadershipTeam />
      <CoreValues />
      <OurProcess />
      <Achievements />
      <AboutIndustries />
      <Certifications />
      <FinalCTA />
    </div>
  );
}
