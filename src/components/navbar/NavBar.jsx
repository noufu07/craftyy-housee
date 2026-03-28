import Logo from "../../assets/images/logo.png";
import  { useState } from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false);
  
  return (
    <>
              <header className="w-full px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex items-center gap-2 ">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-xl font-bold">Crafty House</h1>
        </div>
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#home" className="hover:text-[#A4774D]">
            Home
          </a>
          <a href="#about" className="hover:text-[#A4774D]">
            About
          </a>
          <a href="#products" className="hover:text-[#A4774D]">
            Products
          </a>
          <a href="#contact" className="hover:text-[#A4774D]">
            Contact
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <span className="text-3xl">☰</span>
        </button>
      </header>
    

          {open && (
            <div className="fixed inset-0 bg-black/40 z-50">
              <div className="w-64 h-full bg-white shadow-xl p-6 pt-20 relative">
                <button
                  className="absolute top-4 right-4 text-2xl"
                  onClick={() => setOpen(false)}
                >
                  ×
                </button>
                <nav className="flex flex-col gap-4 text-lg font-medium">
                  <a href="#home" onClick={() => setOpen(false)}>
                    Home
                  </a>
                  <a href="#about" onClick={() => setOpen(false)}>
                    About
                  </a>
                  <a href="#products" onClick={() => setOpen(false)}>
                    Products
                  </a>
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          )}
    </>

  )
}
