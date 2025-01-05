import React from 'react';
import Logo from '/images/Group 160.svg';

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-200 py-8 flex flex-row justify-between items-center"> 
      <img src={Logo} alt="Logo" className="h-8" /> 
      <p className="text-sm text-gray-600">
        © 2077 Zysktechnologies. All rights reserved.
      </p>
    </div>
  );
}