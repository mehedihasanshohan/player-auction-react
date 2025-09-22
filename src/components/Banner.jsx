// Banner.jsx
import React from "react";
import img from "../../public/assets/bg-shadow.png";
import bannerImg from "../../public/assets/banner-main.png";

const Banner = () => {
  return (
    <section
      className="relative max-w-6xl h-[60vh] rounded-3xl mx-auto mt-6 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        {/* foreground image with black bg */}
        <div className="p-4 inline-block rounded-lg mb-4">
          <img
            src={bannerImg}
            alt="banner-img"
            className="w-32 h-32 object-contain"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
          Assemble Your Ultimate Dream 11 Team
        </h1>

        <p className="text-white/70 mt-2">
          Beyond Boundaries, Beyond Limits
        </p>

        <button className="mt-6 px-8 mb-8 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-black rounded-lg font-semibold shadow-lg hover:opacity-90 transition">
          Claim Free Credit
        </button>
      </div>
    </section>
  );
};

export default Banner;
