import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllPublications from './AllPublications';
import Collage from './Collage';
import ScrollToTop from './ScrollToTop';




function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all-publications" element={<AllPublications />} />
        <Route path='/food&travel' element={<Collage />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
