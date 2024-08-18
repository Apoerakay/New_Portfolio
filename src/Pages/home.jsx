import Navbar from "../components/navbar";
import photo from "../assets/can.png";

export function Home() {
  return (
    <>
      <Navbar />
      <div className="text-center mt-20 relative">
        <p className="text-xl text-gray-500">Hi, my name is Kevin and I am a freelance</p>

        <h1 className="text-6xl font-black text-gray-800 leading-none tracking-wide uppercase transform transition duration-300 hover:text-red-500 hover:scale-110 hover:shadow-2xl">
          Web-Developer
        </h1>

        <h1 className="text-6xl font-black text-gray-800 leading-none tracking-wide uppercase transform transition duration-300 hover:text-blue-500 hover:scale-110 hover:shadow-2xl">
          &
        </h1>

        <h1 className="text-6xl font-black text-gray-800 leading-none tracking-wide uppercase transform transition duration-300 hover:text-green-500 hover:scale-110 hover:shadow-2xl">
          Photographer
        </h1>

        {/* Centered and Overlapping Photo */}
        <div className="flex items-center justify-center mt-18 relative">
          <img
            src={photo}
            alt="Bazil's photo"
            className="w-72 h-72 object-cover absolute -top-10 z-10"
          />
        </div>

        <p className="text-lg text-gray-500 mt-44 w-1/2">from Ghana</p>

        {/* Buttons */}
        <div className="absolute bottom-0 inset-x-0 flex justify-center space-x-4 mt-12 z-20">
          <button className="bg-black text-white hover:bg-stone-500 px-6 py-3 rounded-[4px]">You need a designer</button>
          <button className="border border-black hover:bg-white text-black px-6 py-3 rounded-[4px]">You need a photographer</button>
        </div>
   
        
      </div>
      </>
  );
}
