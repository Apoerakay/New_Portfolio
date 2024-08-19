import Navbar from "../components/navbar";
import photo from "../assets/can.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-8 md:mt-16 relative px-4">
        <p className="text-sm sm:text-base md:text-lg text-gray-500">Hi, my name is Kevin and I am a freelance</p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 leading-tight sm:leading-none tracking-wide uppercase transform transition duration-300 hover:text-red-500 hover:scale-110 hover:shadow-2xl">
          Web-Developer
        </h1>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 leading-tight sm:leading-none tracking-wide uppercase transform transition duration-300 hover:text-blue-500 hover:scale-110 hover:shadow-2xl">
          &
        </h1>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 leading-tight sm:leading-none tracking-wide uppercase transform transition duration-300 hover:text-green-500 hover:scale-110 hover:shadow-2xl">
          Photographer
        </h1>

        {/* Centered and Overlapping Photo */}
        <div className="flex items-center justify-center mt-18 relative">
          <img
            src={photo}
            alt="Kevin's image"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-cover absolute -top-8 md:-top-12 z-10"
          />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-24 sm:mt-28 md:mt-32 w-full sm:w-3/4 md:w-2/3 mx-auto">
          from Ghana
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-8 z-20">
          <Link to="/websites">
            <button className="bg-black text-white hover:bg-stone-500 px-4 py-2 sm:px-5 sm:py-2.5 rounded-md text-sm sm:text-base">
              You need a Web Developer?
            </button>
          </Link>
          
          <Link to="/photography">
            <button className="border border-black hover:bg-white text-black px-4 py-2 sm:px-5 sm:py-2.5 rounded-md text-sm sm:text-base">
              You need a photographer?
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
