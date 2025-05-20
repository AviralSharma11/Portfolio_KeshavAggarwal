import AboutSection from "./Components/AboutSection";
import Header from "./Components/Header";
import Heroes from "./Components/Heroes";
import PublicationBoxes from "./Components/PublicationBoxes";
import OpenSourceCode from "./Components/OpenSourceCode";
import Footer from "./Components/Footer";
import OtherPublicationGrid from "./Components/OtherPublicationGrid";



function App() {
  return (
    <div>
      <Header />
      <Heroes />
      <AboutSection />
      <PublicationBoxes />
      <OtherPublicationGrid />
      <OpenSourceCode />
      <Footer />
    </div>
    
  );
}

export default App;
