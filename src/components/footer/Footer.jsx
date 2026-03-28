

export default function Footer() {
  return (
          <footer
        id="contact"
        className="bg-gray-900 text-white py-20 px-6 md:px-24"
      >
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
              <li>
                <a href="#home" className="hover:text-[#C9A27C]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C9A27C]">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C9A27C]">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C9A27C]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>

            <p className="flex items-center gap-2 text-gray-300 hover:text-[#C9A27C] mt-3">
              <i class="fa-solid fa-location-dot"></i>
              <span> Banglegudde, Karkala, Udupi District</span>
            </p>
            <a
              href="https://instagram.com/_crafty.house"
              target="_blank"
              className="flex items-center gap-2 text-gray-300 hover:text-[#C9A27C] mt-3"
            >
              <i className="fa-brands fa-instagram text-xl"></i>
              <span>crafty house</span>
            </a>
            <p className="flex items-center gap-2 text-gray-300 hover:text-[#C9A27C] mt-3">
              <i class="fa-solid fa-phone"></i>+91 90361 80631
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-[#C9A27C] mt-3">
              <i class="fa-solid fa-envelope"></i> craftyyhousee@gmail.com
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        {/* BOTTOM */}
        <div
          className="border-t border-gray-800 mt-16 pt-6 text-gray-500 text-sm 
                flex flex-col md:flex-row items-center md:items-start 
                justify-between gap-4 text-center md:text-left"
        >
          {/* Left side: copyright */}
          <p className="text-gray-400">
            © 2025 Craftyy Housee • Portfolio Website
          </p>

          {/* Right side: developer details */}
          <div className="flex flex-col gap-1 text-gray-400">
            <p>
              Developed by{" "}
              <span className="text-gray-300 font-medium">Mohamad Nowfal</span>
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
  )
}
