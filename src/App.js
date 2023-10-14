// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
// import Register from './components/Register';
import Experience from './components/Experience'
import Skills from './components/Skills';
import Work from './components/Work'
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'animate.css';




function App() {
  return (
    <div className=''>

      <Navbar />
      <Home />
      <About />
      <Experience/>
      <Skills/>
      <Work/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/Register' element={<Register />} />
        </Routes>
      </BrowserRouter> */}
      {/* <h1 className="text-3xl font-bold underline">Ave Maria </h1>
      <h2 className='text-purple-500'>please Help me to finish this project and bless me and give me your grace and protect me wiht blood of Jesus Amen</h2> */}
    </div>
  );
}

export default App;
