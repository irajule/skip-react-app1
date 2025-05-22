import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Global Nav appears on all pages */}
      <AppRoutes /> {/* Renders pages based on the URL */}
    </BrowserRouter>
  );
}

export default App;
