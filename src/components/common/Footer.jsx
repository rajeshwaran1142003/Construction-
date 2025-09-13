import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-4/5 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              <div className="flex items-center gap-4 mb-4">
                <img src="/images/img_group_221.png" alt="logo" className="w-12 h-12 hover:scale-110 transition-transform" />
                <h3 className="text-white text-lg font-bold leading-tight">
                  Amman Construction and<br />Engineering PTE Ltd
                </h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Delivering high-quality construction<br />solutions across Singapore
              </p>
              <div className="flex items-center gap-4">
                <a href="tel:+6581195016" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-110">
                  <img src="/images/img_phone.svg" alt="phone" className="w-4 h-4 filter brightness-0 invert" />
                </a>
                <a href="#location" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-110">
                  <img src="/images/img_location_marker.svg" alt="location" className="w-4 h-4 filter brightness-0 invert" />
                </a>
                <a href="mailto:sales.ammanconstruction@gmail.com" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-110">
                  <img src="/images/img_mail.svg" alt="email" className="w-4 h-4 filter brightness-0 invert" />
                </a>
                <a href="#facebook" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-110">
                  <img src="/images/img_facebook.svg" alt="facebook" className="w-4 h-4 filter brightness-0 invert" />
                </a>
                <a href="#instagram" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-110">
                  <img src="/images/img_instagram.svg" alt="instagram" className="w-4 h-4 filter brightness-0 invert" />
                </a>
                <a href="#linkedin" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all hover:scale-110">
                  <img src="/images/img_linkedin_original.svg" alt="linkedin" className="w-4 h-4 filter brightness-0 invert" />
                </a>
              </div>
            </div>

            {/* Footer Links and Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-2/3 gap-12 sm:gap-8">
              {/* Explore Links */}
              <div className="flex flex-col gap-4 w-full sm:w-auto">
                <h4 className="text-white text-lg font-semibold mb-2">Explore</h4>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="/" className="text-gray-300 text-base hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-300 text-base hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-300 text-base hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="/projects" className="text-gray-300 text-base hover:text-emerald-400 transition-colors hover:translate-x-1 inline-block">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>

              {/* Our Team */}
              <div className="flex flex-col gap-4 w-full sm:w-auto">
                <h4 className="text-white text-lg font-semibold mb-2">Our Team</h4>
                <div className="flex flex-col gap-6">
                  {/* Mr. Sankar */}
                  <div className="flex flex-col gap-2">
                    <h5 className="text-white text-base font-semibold">Mr. Sankar</h5>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <img src="/images/img_mail.svg" alt="email" className="w-4 h-4 filter brightness-0 invert opacity-70" />
                        <a href="mailto:sankar0306@gmail.com" className="text-gray-300 text-sm hover:text-emerald-400 transition-colors">
                          sankar0306@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="/images/img_phone.svg" alt="phone" className="w-4 h-4 filter brightness-0 invert opacity-70" />
                        <a href="tel:+6598415366" className="text-gray-300 text-sm hover:text-emerald-400 transition-colors">
                          +65 98415366
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Mr. Raja */}
                  <div className="flex flex-col gap-2">
                    <h5 className="text-white text-base font-semibold">Mr. Raja</h5>
                    <div className="flex items-center gap-2 mb-1">
                      <img src="/images/img_mail.svg" alt="email" className="w-4 h-4 filter brightness-0 invert opacity-70" />
                      <a href="mailto:bharathicdm@gmail.com" className="text-gray-300 text-sm hover:text-emerald-400 transition-colors">
                        bharathicdm@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/images/img_phone.svg" alt="phone" className="w-4 h-4 filter brightness-0 invert opacity-70" />
                      <a href="tel:+6581195016" className="text-gray-300 text-sm hover:text-emerald-400 transition-colors">
                        +65 81195016
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-4 w-full sm:w-auto">
                <h4 className="text-white text-lg font-semibold mb-2">Contact</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <img src="/images/img_location_marker.svg" alt="location" className="w-4 h-4 mt-1 filter brightness-0 invert opacity-70" />
                    <address className="text-gray-300 text-sm leading-relaxed not-italic">
                      1 Soon Lee Street,<br />
                      #02-29 Pioneer Centre,<br />
                      Singapore 627605
                    </address>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/images/img_mail.svg" alt="email" className="w-4 h-4 filter brightness-0 invert opacity-70" />
                    <a href="mailto:sales.ammanconstruction@gmail.com" className="text-gray-300 text-sm hover:text-emerald-400 transition-colors">
                      sales.ammanconstruction@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/images/img_phone.svg" alt="phone" className="w-4 h-4 filter brightness-0 invert opacity-70" />
                    <a href="tel:+6581195016" className="text-gray-300 text-sm hover:text-emerald-400 transition-colors">
                      +65 81195016
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Logo */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img 
              src="/images/img_footer_logo.png" 
              alt="footer logo" 
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-xl object-contain hover:scale-105 transition-transform shadow-2xl"
            />
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Amman Construction and Engineering PTE Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;