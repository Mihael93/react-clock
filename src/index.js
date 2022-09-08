import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AnalogClock from './AnalogClock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <AnalogClock />
   </React.StrictMode>
);
