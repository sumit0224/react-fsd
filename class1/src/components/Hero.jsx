import Navbar from "./Navbar";
import { LuArrowUpRight } from "react-icons/lu";

function Hero() {
  const images = [
    { name: "Apple", img: "/images/apple-logo.png" },
    { name: "Facebook", img: "/images/facebook.png" },
    { name: "Instagram", img: "/images/social.png" },
    { name: "WhatsApp", img: "/images/whatsapp.png" },
    { name: "YouTube", img: "/images/youtube.png" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-t from-[#fbe4c0] to-[#f4f0eb] px-6 md:px-8">
      <Navbar />

      {/* Hero Section */}
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-center w-full max-w-[80vw] leading-tight">
          Hope{" "}
          <span
            className="inline-block w-[140px] md:w-[200px] h-[80px] md:h-[120px] rounded-full relative top-2 md:top-4 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://thumbs.dreamstime.com/b/portrait-happy-black-family-children-sitting-floor-african-yellow-studio-background-free-space-161551793.jpg')",
            }}
          ></span>{" "}
          Rise is Support
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center mt-12 gap-8 flex-wrap">
        <button className="bg-green-500 px-5 py-2 rounded-2xl text-sm text-white hover:scale-105 transition">
          Donate
        </button>

        <button className="flex items-center gap-2 group">
          I need help
          <span className="p-2 rounded-full border border-black group-hover:rotate-45 transition">
            <LuArrowUpRight />
          </span>
        </button>
      </div>

      {/* Bottom Brands */}
      <div className="absolute bottom-10 left-0 right-0 px-6 md:px-8">
        <div className="w-full h-[1px] bg-zinc-400"></div>

        <div className="flex flex-wrap justify-between gap-4 mt-4 items-center">
          {images.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 items-center opacity-80 hover:opacity-100 transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-8 h-8 object-contain"
              />

              <span className="text-sm md:text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;