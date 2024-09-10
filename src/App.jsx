import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import Carousel from './components/Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <Navbar />
      <SectionA/>
      <SectionB/>
      <Carousel/>
      <Footer />
    </div>
  );
}

export default App;