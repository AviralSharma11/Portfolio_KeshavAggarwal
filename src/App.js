import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllPublications from './AllPublications';
import Collage from './Collage';
import ScrollToTop from './ScrollToTop';
import Publications from './Publications';
import Education from './Education';
import AboutMePage from './AboutMePage';
import Outreach from './Outreach';
import ImageSlider from './ImageSlider';




function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/publications/other-publications" element={<AllPublications />} />
        <Route path='/outreach/food&travel' element={<Collage />} />
        <Route path='/outreach/talks' element={<ImageSlider/>} />
        <Route path='/publications' element={<Publications/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/about' element={<AboutMePage/>} />
        <Route path='/outreach' element={<Outreach/>} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
