import React from 'react';

const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
            <a href="/" className="pl-8">Logo</a>
        
            <div className="pr-8 md:block hidden">
            <a href="/" className="p-4">Home</a>
            <a href="#about" className="p-4">About</a>
            <a href="#projects" className="p-4">Projects</a>
            <a href="#contact" className="p-4">Contact</a>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
