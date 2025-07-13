import React , {useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Header from "./Components/Header";
import PublicationBoxes from "./Components/PublicationBoxes";
import OtherPublicationGrid from "./Components/OtherPublicationGrid";
import OpenSourceCode from "./Components/OpenSourceCode";

export default function Publications(){
        const location = useLocation();
    
      useEffect(() => {
        if (location.hash) {
          const id = location.hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      }, [location]);
    return(
        <>
            <div style={{marginTop : "104px"}}>
            <Header />
            <PublicationBoxes />
            <OtherPublicationGrid />
            <OpenSourceCode />    
            </div>
        </>
    );
}