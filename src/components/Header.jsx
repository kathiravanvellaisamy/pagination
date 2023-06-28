import { FiLogIn, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full py-3 border-b border-gray-300 shadow-md">
      <div className="px-8 md:px-16   flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <img
            src={"./images/online-shop.png"}
            alt="logo"
            className="w-[30px] md:w-[40px]"
          />
          <span className="text-gray-700 font-extralight text-2xl md:text-3xl">
            Shopping Kart
          </span>
        </div>
        <div className="hidden md:flex">
          <input
            type="search"
            className="border border-gray-200 outline-none focus:outline-1 w-[340px] px-3 py-2 rounded-md "
            placeholder="Search something..."
          />
        </div>
        <div className="flex flex-row items-center gap-8">
          <span className="flex flex-row items-center gap-1 cursor-pointer">
            <FiLogIn size={24} /> Sign In
          </span>
          <span className="flex flex-row items-center cursor-pointer">
            <FiShoppingCart size={24} />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
