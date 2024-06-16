import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Logo */}
      <div>
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Soobin</span>
          <span className="flex items-center justify-center w-12 h-8 rounded bg-white text-black">
            .dev
          </span>
        </Link>
      </div>
      {/* Responsite Menu */}
      <div>
        {/* Menu Button */}
        <button className="w-10 h-8 flex flex-col justify-between">
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
