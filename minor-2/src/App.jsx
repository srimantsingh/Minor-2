// import { useState } from 'react';
// import reactLogo from './assets/react.svg';  // Corrected import
// import viteLogo from '/vite.svg';           // Corrected import
import './App.css';
import React from 'react';

import Card from './components/Card';
import ImageComponent from './components/ImageComponent';
import ResumeGrid from './components/ResumeGrid';

function App() {
  return (
    <div>
      <Card />
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center py-6">Resume Templates</h1>
        <ResumeGrid />
      </div>
    </div>
  );
}

export default App;
