import React, { useState } from "react";

// Placeholder images (no missing-file errors)
import HeroImage from "./assets/images/shopImage.jpg";

import ShopImage from "./assets/images/shop1.png";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

// Updated styling for a more attractive & professional look
export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* NAVBAR */}
<NavBar/>
      {/* MOBILE SIDEBAR */}


      {/* HERO SECTION */}
      <section
        id="home"
        className="pt-28 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10"
      >
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Beautiful Custom Gift Hampers <br /> Crafted with Love
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Craftyy Housee makes premium and personalized hampers for birthdays,
            anniversaries, weddings, corporate events, and more.
          </p>
          <button className="bg-[#A4774D] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#8F6742] transition">
            Explore Hampers
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={ShopImage}
            alt="Hero"
            className="w-full max-w-md rounded-xl shadow"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      {/* <section
        id="about"
        className="px-6 md:px-16 py-20 bg-[#F7F3EB] mt-16 flex flex-col md:flex-row items-center gap-10"
      >
        <img
          src={HeroImage}
          alt="About"
          className="w-full max-w-sm rounded-xl shadow-lg"
        />
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">
            Why Choose Craftyy Housee?
          </h3>
          <p className="text-gray-700 mb-4">
            We aim to create personalized gifting experiences with handcrafted
            designs and premium quality materials.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Premium materials</li>
            <li>Handcrafted with care</li>
            <li>Customized for every occasion</li>
            <li>Fast delivery options</li>
          </ul>
        </div>
      </section> */}

<section
  id="services"
  className="px-6 md:px-16 py-20 bg-[#F7F3EB] mt-16"
>
  {/* MOBILE HEADING (top) */}
  <h3 className="text-3xl font-bold mb-6 text-center md:hidden">
    Services We Provide
  </h3>

  <div className="flex flex-col md:flex-row items-center gap-10">
    
    {/* IMAGE */}
    <img
      src={HeroImage}
      alt="Services"
      className="w-full max-w-sm rounded-xl shadow-lg"
    />

    {/* RIGHT CONTENT */}
    <div className="flex-1">
      
      {/* DESKTOP HEADING */}
      <h3 className="text-3xl font-bold mb-4 hidden md:block">
        Services We Provide
      </h3>

      <p className="text-gray-700 mb-6">
        We create unique and memorable experiences with our wide range of creative services.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {[
          "Custom Gift Hampers 🎁",
          "Hamper Materials ✂️",
          "Cakes & Treats 🎂",
          "Invitation Cards 💌",
          "Surprise Videos 🎥",
          "Event & Corporate Gifting 🎉",
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md hover:-translate-y-1 transition"
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* CRAFT SUPPLIES SECTION */}
      <section id="supplies" className="px-6 md:px-16 py-20">
        <h3 className="text-3xl font-bold text-center mb-10">Craft Supplies</h3>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We also provide premium materials for making gift hampers — perfect
          for DIY lovers, crafters, and shop owners.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Wrapping paper", img: "/item1.png" },
            { name: "Ribbons", img: "/item2.png" },
            { name: "Gift Bags", img: "/item3.png" },
            { name: "Frames", img: "/item4.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
            >
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold text-center">{item.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="px-6 md:px-16 py-20">
        <h3 className="text-3xl font-bold text-center mb-10">
          Popular Hampers
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
            >
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                <img
                  className="w-full h-full object-contain rounded-lg"
                  src={`/hamper${i}.png`}
                  alt={`Hamper ${i}`}
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">Hamper {i}</h4>
              <p className="text-gray-600 mb-4">
                Beautiful handcrafted hamper.
              </p>
              <button className="bg-[#A4774D] text-white px-4 py-2 rounded-lg hover:bg-[#8F6742]">
                View
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
<Footer/>
    </div>
  );
}
