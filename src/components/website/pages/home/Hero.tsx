import React from "react";
import { FaPlay, FaVolumeUp } from "react-icons/fa";
import { IoIosPlayCircle } from "react-icons/io";
import { BsSoundwave } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-70px)] mt-[70px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero/banner.mp4" type="video/mp4" />
      </video>


      {/* Center Content */}
      <div className="relative z-10 flex h-full flex-col justify-center items-center text-center px-4">
              <h1 className=" font-cormorant text-white text-center font-light capitalize  tracking-[1px]  leading-[130px]  text-[130px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.10)] ">
                  Be Sure, <br />
                  Live Better
              </h1>

      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-[70px] left-0 right-0 z-10 px-6">
        <div className="mx-auto flex max-w-[90%] items-center justify-between gap-4  rounded-full px-6 py-3">
          
          {/* Play Button */}
          <button className="flex items-center justify-center hover:scale-105 transition">
            {/* <FaPlay className="text-transparent"/> */}
            <IoIosPlayCircle className="text-[50px] text-white"/>
          </button>

          {/* Search Input */}
          <div className="flex items-center justify-between w-full max-w-xl border-b py-3 border-white">
            <input
              type="text"
              placeholder="Search by Project, Location "
              className="w-full rounded-full  text-white placeholder:text-white outline-none"
            />
            <IoSearchOutline className="text-white"/>
          </div>

          {/* Sound */}
          <div className=" text-white cursor-pointer">
          <div className="flex items-center text-[23px]">
            <BsSoundwave className="text-[20px]"/><BsSoundwave />
          </div>
            <span className="text-sm uppercase tracking-wider">Sound</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



















// import React from "react";
// import { FaPlay, FaVolumeUp } from "react-icons/fa";

// const Hero = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute inset-0 h-full w-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src="/videos/hero.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay (optional for readability) */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Center Content */}
//       <div className="relative z-10 flex h-full flex-col justify-center items-center text-center px-4">
//         <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight max-w-4xl">
//           Discover Stories Beyond Imagination
//         </h1>
//       </div>

//       {/* Bottom Controls */}
//       <div className="absolute bottom-6 left-0 right-0 z-10 px-6">
//         <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
          
//           {/* Play Button */}
//           <button className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-black hover:scale-105 transition">
//             <FaPlay />
//           </button>

//           {/* Search Input */}
//           <div className="flex-1 max-w-xl">
//             <input
//               type="text"
//               placeholder="Search anything..."
//               className="w-full rounded-full px-5 py-3 bg-white/90 text-black placeholder:text-gray-500 outline-none"
//             />
//           </div>

//           {/* Sound */}
//           <div className="flex items-center gap-2 text-white cursor-pointer">
//             <FaVolumeUp />
//             <span className="text-sm uppercase tracking-wider">Sound On</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
