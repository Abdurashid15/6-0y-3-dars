import React from 'react';
import './App.css'
import Counter from './components/Raqamlar Hisoblagichi (Counter)'
import SocialMediaPost from './components/SocialMediaPost';
import GamePicker from './components/GamePicker';
import Tab from './components/Yorliqlarni Tanlash (Tab Selector)'
import ProgressBar from './components/ProgreBar';
import ImageGallery from './components/Gallery';
function App() {

  return (
    <>
      <Tab />
      <SocialMediaPost />
      <Counter />
      <GamePicker />
      <ProgressBar/>
      <ImageGallery/>
    </>
  )
}

export default App
