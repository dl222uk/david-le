import React from 'react';



const Navbar = () => {
  const scrollToSection = (sectionid) => {
    const section = document.getElementById(sectionid);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 flex justify-center items-center">
        <nav className="border border-gray-300 p-1 rounded-2xl">
          <ul className="flex space-x-10 p-1">
            <span className='text-lg'>
              <h1 className="text-blue-600" style={{ fontSize: '28px' }}>David</h1>
            </span>
            <li onClick={() => scrollToSection('home')}  style={{ fontSize: '19px',  cursor: 'pointer' }}>Home</li>

            <li onClick={() => scrollToSection('about')} style={{ fontSize: '19px', cursor: 'pointer'}}>About</li>

            <li style={{ fontSize: '19px',  cursor: 'pointer'}}>Skills</li>

            <li onClick={() => scrollToSection('work')} style={{ fontSize: '19px',  cursor: 'pointer'}}>Experience</li>

            <li onClick={() => scrollToSection('portfolio')} style={{ fontSize: '19px',  cursor: 'pointer'}}>Portfolio</li>

            <li style={{ fontSize: '19px', cursor: 'pointer', listStyle: 'none' }}> <a href='/public/CV David Le.pdf' 
            target= '_blank' rel ="noopener noreferrer">Resume</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;