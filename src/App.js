
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider/Slidercomp';
import Footer from './components/Footer';
import ImageUpload from './components/Imageupload/ImageUpload';
import Vedioplayer from './components/Vedio/Videoplayer';
import Icons from './components/Icons';
import Infotemplate from './components/Infotemplate';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <ImageUpload/>
      <Icons/>
      <Vedioplayer />
      <Infotemplate/>
      <Footer/>

      
     
    </div>
  );
}

export default App;
