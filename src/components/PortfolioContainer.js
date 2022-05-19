import React, { useState } from 'react';
// import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Header from './header';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
    return <Resume />;
  }
    return <Contact />
  };

  //*method to 
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
     
      <Header currentPage ={currentPage} handlePageChange = {handlePageChange}/>
      
      {renderPage()}
    </div>
  );
}
