import { IoCallOutline } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tight cursor-pointer">
        HopeRise
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-10 text-sm font-medium">
        <a
          href="#"
          className="hover:text-green-600 transition duration-300"
        >
          Who We Are
        </a>

        <a
          href="#"
          className="hover:text-green-600 transition duration-300"
        >
          What We Do
        </a>

        <a
          href="#"
          className="hover:text-green-600 transition duration-300"
        >
          News & Events
        </a>

        <a
          href="#"
          className="hover:text-green-600 transition duration-300"
        >
          Get Involved
        </a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        
        {/* Call Button */}
        <button className="rounded-full border border-black p-2 hover:bg-black hover:text-white transition duration-300">
          <IoCallOutline size={18} />
        </button>

        {/* Donate Button */}
        <button className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-green-600 transition duration-300">
          Donate
        </button>
      </div>
    </nav>
  );
}

export default Navbar;