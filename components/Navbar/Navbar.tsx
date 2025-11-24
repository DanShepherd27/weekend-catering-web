
import React from 'react';
import Link from 'next/link'; // Import Link

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-center items-center"> {/* Centered content */}
        <Link href="/" className="text-3xl font-bold hover:text-gray-300"> {/* Link for "Weekend Catering" */}
          Weekend Catering
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
