import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';

function App() {
  return (
    <div>
      <Navbar />
      <SectionA/>
      <SectionB/>
      <Footer />
    </div>
  );
}

export default App;