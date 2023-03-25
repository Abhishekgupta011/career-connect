import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 py-12 mt-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white">About Us</h2>
            <p className="mt-4 text-gray-400">
              We are dedicated to providing the best resources and tools for college students to succeed in their academic and personal lives.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Contact Us</h2>
            <ul className="mt-4">
              <li>
                <a href="mailto:info@collegesuccess.com" className="text-gray-400 hover:text-white transition duration-200">
                  info@collegesuccess.com
                </a>
              </li>
              <li className="mt-2">
                <a href="tel:123-456-7890" className="text-gray-400 hover:text-white transition duration-200">
                  123-456-7890
                </a>
              </li>
              <li className="mt-2">
                <span className="text-gray-400">123 Main St.</span>
              </li>
              <li>
                <span className="text-gray-400">City, State Zip</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-400 text-center">
            &copy; 2023 College Success. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
