import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Gigs from './components/Gigs/Gigs';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import PopupModal from './components/PopupModal/PopupModal';

import { useModal } from './context/ModalContext';

import {photos} from './utils/constants';
import {videos} from './utils/constants';

function App() {
  const { isOpen } = useModal();

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Gallery photos={photos} videos={videos}/>
      <Gigs />
      <Footer />
      {isOpen && (<PopupModal/>)}
    </div>
  );
}

export default App;
