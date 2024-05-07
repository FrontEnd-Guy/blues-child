import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Gigs from './components/Gigs/Gigs';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';

import { useModal } from './context/ModalContext';

import {photos} from './utils/constants';
import {videos} from './utils/constants';
import PopupModal from './components/PopupModal/PopupModal';

function App() {
  const { isOpen } = useModal();

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Gigs />
      <Gallery photos={photos} videos={videos}/>
      <Footer />
      {isOpen && (<PopupModal/>)}
    </div>
  );
}

export default App;
