import React from "react";

const Header = () => {
  return (
    <header className="sticky w-full h-40 border-b border-gray-400 shadow-lg">
      <div className="p-8 md:p-16 py-2 flex flex-row items-center justify-between">
        <div>logo</div>
        <div>Search</div>
        <div>Account</div>
      </div>
    </header>
  );
};

export default Header;
