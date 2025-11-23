// // Full corrected React + Vite + Tailwind v4 responsive website
// // Updated: Removed broken imports and replaced them with placeholder image URLs.
// // User can later replace placeholders with real images in /src/assets/

// import React, { useState } from "react";

// // Placeholder images (no missing-file errors)
// import Logo from "./assets/images/logo.png"
// import HeroImage from './assets/images/HeroImage.png'
// import ShopImage from './assets/images/shop1.jpg'
// // Updated styling for a more attractive & professional look
// export default function App() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="min-h-screen w-full bg-white text-gray-900">
//       {/* NAVBAR */}
//       <header className="w-full px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 bg-white z-50">
//         <div className="flex items-center gap-2 ">
//           <img src={Logo} alt="Logo" className="w-12 h-12" />
//           <h1 className="text-xl font-bold">Craftyy.Housee</h1>
//         </div>
//         <nav className="hidden md:flex gap-6 font-medium">
//           <a href="#home" className="hover:text-[#A4774D]">Home</a>
//           <a href="#about" className="hover:text-[#A4774D]">About</a>
//           <a href="#products" className="hover:text-[#A4774D]">Products</a>
//           <a href="#contact" className="hover:text-[#A4774D]">Contact</a>
//         </nav>
//         <button className="md:hidden" onClick={() => setOpen(true)}>
//           <span className="text-3xl">☰</span>
//         </button>
//       </header>

//       {/* MOBILE SIDEBAR */}
//       {open && (
//         <div className="fixed inset-0 bg-black/40 z-50">
//           <div className="w-64 h-full bg-white shadow-xl p-6 pt-20 relative">
//             <button className="absolute top-4 right-4 text-2xl" onClick={() => setOpen(false)}>×</button>
//             <nav className="flex flex-col gap-4 text-lg font-medium">
//               <a href="#home" onClick={() => setOpen(false)}>Home</a>
//               <a href="#about" onClick={() => setOpen(false)}>About</a>
//               <a href="#products" onClick={() => setOpen(false)}>Products</a>
//               <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
//             </nav>
//           </div>
//         </div>
//       )}

//       {/* HERO SECTION */}
//       <section id="home" className="pt-28 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
//         <div className="flex-1">
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
//             Beautiful Custom Gift Hampers <br /> Crafted with Love
//           </h2>
//           <p className="text-lg text-gray-600 mb-6">
//             Craftyy Housee makes premium and personalized hampers for birthdays, anniversaries, weddings, corporate events, and more.
//           </p>
//           <button className="bg-[#A4774D] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#8F6742] transition">
//             Explore Hampers
//           </button>
//         </div>
//         <div className="flex-1 flex justify-center">
//           <img src={HeroImage} alt="Hero" className="w-full max-w-md rounded-xl shadow" />
//         </div>
//       </section>



//       {/* ABOUT SECTION */}
//       <section id="about" className="px-6 md:px-16 py-20 bg-[#F7F3EB] mt-16 flex flex-col md:flex-row items-center gap-10">
        
//         <img src={ShopImage} alt="About" className="w-full max-w-sm rounded-xl shadow-lg" />
//         <div className="flex-1">
//           <h3 className="text-3xl font-bold mb-4">Why Choose Craftyy Housee?</h3>
//           <p className="text-gray-700 mb-4">
//             We aim to create personalized gifting experiences with handcrafted designs and premium quality materials.
//           </p>
//           <ul className="list-disc pl-6 text-gray-700 space-y-2">
//             <li>Premium materials</li>
//             <li>Handcrafted with care</li>
//             <li>Customized for every occasion</li>
//             <li>Fast delivery options</li>
//           </ul>
//         </div>
//       </section>

//       {/* PRODUCTS SECTION */}
//       <section id="products" className="px-6 md:px-16 py-20">
//         <h3 className="text-3xl font-bold text-center mb-10">Popular Hampers</h3>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[1, 2, 3, 4, 5, 6].map((i) => (
//             <div key={i} className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
//               <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
//                 Image {i}
//               </div>
//               <h4 className="text-xl font-semibold mb-2">Hamper {i}</h4>
//               <p className="text-gray-600 mb-4">Beautiful handcrafted hamper.</p>
//               <button className="bg-[#A4774D] text-white px-4 py-2 rounded-lg hover:bg-[#8F6742]">View</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FOOTER */}
// <footer id="contact" className="bg-gray-900 text-white py-14 mt-20 px-6 md:px-16">
// <div className="grid md:grid-cols-3 gap-10">


// {/* Brand */}
// <div>
// <h4 className="text-2xl font-semibold mb-3">Craftyy Housee</h4>
// <p className="text-gray-300 mb-4">Premium handcrafted gift hampers for every occasion.</p>
// <p className="text-gray-400 text-sm">© 2025 Craftyy Housee. All rights reserved.</p>
// </div>


// {/* Contact Info */}
// <div>
// <h4 className="text-xl font-semibold mb-3">Contact</h4>
// <p className="text-gray-300"><i class="fa-solid fa-location-dot"></i>  <span className="ml-1">Banglegudde, Karkala, Udupi district </span></p>
// <p className="text-gray-300">📞 +91 98765 43210</p>
// <p className="text-gray-300">📧 craftyyhousee@gmail.com</p>
// <a href="https://instagram.com/craftyy_housee" target="_blank" className="text-[#A4774D] underline block mt-2">Instagram: @craftyy_housee</a>
// </div>


// {/* Developer Info */}
// <div>
// <h4 className="text-xl font-semibold mb-3">Developer</h4>
// <p className="text-gray-300">👨‍💻 Developed by: <span className="font-semibold">Mohamad Nowfal</span></p>
// <p className="text-gray-300">React + Tailwind Specialist</p>
// <p className="text-gray-300">📧 nowfal.dev@gmail.com</p>
// </div>


// </div>
// </footer>
//     </div>
//   );
// }



// Full corrected React + Vite + Tailwind v4 responsive website
// Updated: Removed broken imports and replaced them with placeholder image URLs.
// User can later replace placeholders with real images in /src/assets/

import React, { useState } from "react";

// Placeholder images (no missing-file errors)
import Logo from "./assets/images/logo.png"
import HeroImage from './assets/images/HeroImage.png'
import ShopImage from './assets/images/shop1.jpg'
// Updated styling for a more attractive & professional look
export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="w-full px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex items-center gap-2 ">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-xl font-bold">Craftyy.Housee</h1>
        </div>
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#home" className="hover:text-[#A4774D]">Home</a>
          <a href="#about" className="hover:text-[#A4774D]">About</a>
          <a href="#products" className="hover:text-[#A4774D]">Products</a>
          <a href="#contact" className="hover:text-[#A4774D]">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <span className="text-3xl">☰</span>
        </button>
      </header>

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="w-64 h-full bg-white shadow-xl p-6 pt-20 relative">
            <button className="absolute top-4 right-4 text-2xl" onClick={() => setOpen(false)}>×</button>
            <nav className="flex flex-col gap-4 text-lg font-medium">
              <a href="#home" onClick={() => setOpen(false)}>Home</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#products" onClick={() => setOpen(false)}>Products</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </nav>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="home" className="pt-28 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Beautiful Custom Gift Hampers <br /> Crafted with Love
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Craftyy Housee makes premium and personalized hampers for birthdays, anniversaries, weddings, corporate events, and more.
          </p>
          <button className="bg-[#A4774D] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#8F6742] transition">
            Explore Hampers
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={HeroImage} alt="Hero" className="w-full max-w-md rounded-xl shadow" />
        </div>
      </section>



      {/* ABOUT SECTION */}
      <section id="about" className="px-6 md:px-16 py-20 bg-[#F7F3EB] mt-16 flex flex-col md:flex-row items-center gap-10">
        
        <img src={ShopImage} alt="About" className="w-full max-w-sm rounded-xl shadow-lg" />
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">Why Choose Craftyy Housee?</h3>
          <p className="text-gray-700 mb-4">
            We aim to create personalized gifting experiences with handcrafted designs and premium quality materials.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Premium materials</li>
            <li>Handcrafted with care</li>
            <li>Customized for every occasion</li>
            <li>Fast delivery options</li>
          </ul>
        </div>
      </section>



{/* CRAFT SUPPLIES SECTION */}
<section id="supplies" className="px-6 md:px-16 py-20">
  <h3 className="text-3xl font-bold text-center mb-10">Craft Supplies</h3>

  <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
    We also provide premium materials for making gift hampers — perfect for DIY lovers, 
    crafters, and shop owners.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      { name: "Gift Frames", img: "/frames.png" },
      { name: "Hamper Boxes", img: "/boxes.png" },
      { name: "Gift Bags", img: "/bags.png" },
      { name: "Decor Items", img: "/decor.png" },
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
        <h3 className="text-3xl font-bold text-center mb-10">Popular Hampers</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                <img className="w-full h-full object-contain rounded-lg"  src={`/hamper${i}.png`} 
  alt={`Hamper ${i}`}/>
                
              </div>
              <h4 className="text-xl font-semibold mb-2">Hamper {i}</h4>
              <p className="text-gray-600 mb-4">Beautiful handcrafted hamper.</p>
              <button className="bg-[#A4774D] text-white px-4 py-2 rounded-lg hover:bg-[#8F6742]">View</button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
  <footer id="contact" className="bg-gray-900 text-white py-20 px-6 md:px-24">
        <div className="flex flex-col md:flex-row justify-between gap-16">

          {/* BRAND */}
          <div className="md:w-1/2">
            <h4 className="text-3xl font-bold mb-4">Craftyy.Housee</h4>
            <p className="text-gray-300 leading-relaxed max-w-md">
              A portfolio showcasing handcrafted hampers designed with elegance,
              creativity, and personal detail.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="text-gray-300 space-y-3">
              <li><a href="#home" className="hover:text-[#C9A27C]">Home</a></li>
              <li><a href="#about" className="hover:text-[#C9A27C]">About</a></li>
              <li><a href="#gallery" className="hover:text-[#C9A27C]">Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#C9A27C]">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
<div>
  <h4 className="text-lg font-semibold mb-4">Contact</h4>
  
  <p className="flex items-center gap-2 text-gray-300 hover:text-[#C9A27C] mt-3"><i class="fa-solid fa-location-dot"></i><span > Banglegudde, Karkala, Udupi District</span></p>
    <a
    href="https://instagram.com/craftyy_housee"
    target="_blank"
    className="flex items-center gap-2 text-gray-300 hover:text-[#C9A27C] mt-3"
  >
    <i className="fa-brands fa-instagram text-xl"></i>
    <span>craftyy.housee</span>
  </a>
  <p className="flex items-center gap-2 text-gray-300 hover:text-[#C9A27C] mt-3"><i class="fa-solid fa-phone"></i> +91 98765 43210</p>
  <p className="flex items-center gap-2 text-gray-300 hover:text-[#C9A27C] mt-3"><i class="fa-solid fa-envelope"></i> craftyyhousee@gmail.com</p>


</div>
        </div>

        {/* BOTTOM */}
{/* BOTTOM */}
<div className="border-t border-gray-800 mt-16 pt-6 text-gray-500 text-sm 
                flex flex-col md:flex-row items-center md:items-start 
                justify-between gap-4 text-center md:text-left">

  {/* Left side: copyright */}
  <p className="text-gray-400">
    © 2025 Craftyy Housee • Portfolio Website
  </p>

  {/* Right side: developer details */}
  <div className="flex flex-col gap-1 text-gray-400">
    <p>
      Developed by <span className="text-gray-300 font-medium">Mohamad Nowfal</span>
    </p>

    <p className="flex items-center justify-center md:justify-start gap-2">
      <i className="fa-solid fa-phone"></i>
      +91 7619575961
    </p>

    <a
      href="https://www.instagram.com/nowfal__07/"
      target="_blank"
      className="flex items-center justify-center md:justify-start gap-2 hover:text-[#C9A27C]"
    >
      <i className="fa-brands fa-instagram text-lg"></i>
      <span>nowfal__07</span>
    </a>
  </div>
</div>

      </footer>
    </div>
  );
}
