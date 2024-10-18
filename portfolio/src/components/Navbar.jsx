import React from 'react';



const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <nav className="border border-gray-300 p-1 rounded-2xl"> {/* Reduced padding here */}
          <ul className="flex space-x-10 p-1"> {/* Reduced space between items and padding */}
            <span className='text-lg '> {/* Reduced font size and padding */}
            <h1 className="text-purple-800 " style={{ fontSize: '28px' }}>David</h1>
            </span>
            <li style={{ fontSize: '19px'  }}>Home</li> {/* Reduced text size and padding */}
            <li style={{ fontSize: '19px' }}>About</li>
            <li style={{ fontSize: '19px' }}>Skills</li>
            <li style={{ fontSize: '19px' }}>Portfolio</li>
            <li style={{ fontSize: '19px' }}>Resume </li>
          </ul>
      
        </nav>
        
      </div>
    </div>
  );
}

export default Navbar;
