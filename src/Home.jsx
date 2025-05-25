import React , {useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "./Components/Header";
import Heroes from './Components/Heroes';
import AboutSection from "./Components/AboutSection";
import OtherPublicationGrid from "./Components/OtherPublicationGrid";
import PublicationBoxes from "./Components/PublicationBoxes";
import OpenSourceCode from "./Components/OpenSourceCode";
import Footer from "./Components/Footer";


export default function Home(){
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Wait a tick if needed
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
    return(
        <div className="home">
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