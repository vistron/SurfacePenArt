import React from 'react';
import Toolbar from './component/Header';
import ImageCard from './component/ImageCard'
import './css/style.css'

function App() {
  return (
    <div>
      <Toolbar/>
      <div className="content">
        <ImageCard />
      </div>
    </div>
  );
}

export default App;
