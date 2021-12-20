import React, { useState } from 'react';
import Nav from './Nav';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function PortfolioContainer() {
  const [currentPage, handlePageChange] = useState('About');

const renderPage = () => {
  
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact/>;
      case 'Resume':
        return <Resume/>;
      default:
        return <About/>
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default PortfolioContainer;
