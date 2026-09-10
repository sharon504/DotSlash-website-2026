import Welcome from "./components/welcome";
import Countdown from "./components/countdown";
import Gallery from "./components/gallery";
import CollaborateSection from "./components/CollaborateSection";
import Events from "./components/events";
import Footer from "./components/footer";
import Tshirt from "./components/Tshirt";
import NotJustAFest from "./components/NotJustAFest";
import Landing from "./components/Landing";
import CTABand from "./components/CTABand";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      <Landing />
      <Welcome />
      <Countdown />
      <Events />
      <NotJustAFest />
      <Tshirt />
      <Gallery />
      <CollaborateSection />
      <CTABand />
      <Footer />
    </div>
  );
}