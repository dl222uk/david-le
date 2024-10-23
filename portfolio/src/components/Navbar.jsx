import React from 'react';



const Navbar = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 flex justify-center items-center">
        <nav className="border border-gray-300 p-1 rounded-2xl">
          <ul className="flex space-x-10 p-1">
            <span className='text-lg'>
              <h1 className="text-blue-600" style={{ fontSize: '28px' }}>David</h1>
            </span>
            <li style={{ fontSize: '19px' }}>Home</li>
            <li style={{ fontSize: '19px' }}>About</li>
            <li style={{ fontSize: '19px' }}>Skills</li>
            <li style={{ fontSize: '19px' }}>Portfolio</li>
            <li style={{ fontSize: '19px' }}>Resume</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;