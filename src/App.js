import React from 'react';
import SkipSelectionPage from './pages/SkipSelectionPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
       <>
      <Navbar /> {/* Global Nav appears on all pages */}
       <SkipSelectionPage/>
       </>
  );
}

export default App;
