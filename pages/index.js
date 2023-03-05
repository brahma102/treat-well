import AboutUs from "../components/home/AboutUs";
import Banner from "../components/home/Banner";
import Info from "../components/home/Info";
import Physician from "../components/home/Physician";
import Team from "../components/home/Team";

export default function Home() {
  return (
    <div>
      <Banner />
      <Physician />
      <AboutUs />
      <Team />
      <Info />
    </div>
  );
}
