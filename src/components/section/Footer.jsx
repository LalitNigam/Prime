import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { CiFacebook } from 'react-icons/ci';
import { FaTiktok } from 'react-icons/fa';

const footerLinks = [
  {
    title: 'RAPID REHYDRATION',
    links: ['ICE HYDRATION', 'HYDRATION', 'HYDRATION+ STICKS', 'ENERGY'],
  },
  {
    title: 'ABOUT PRIME',
    links: [
      'TEAM + ATHLETES',
      'CREATORS', 
      'ARTISTS',
      'AMBASSADORS',
    ],
  },
  {
    title: 'FAQS',
    links: [
      'PRIVACY POLICY',
      'RETURN POLICY', 
      'WHERE TO BUY',
      'CONTACT US',
    ],
  },
];

export default function Footer() {
  const footerRef = useRef();
  const [isHovered, setIsHovered] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-tr from-black via-zinc-900 to-zinc-800 text-zinc-100 p-8 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 "></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 relative">
        {/* About Section */}
        <div className="flex w-[30px] transform hover:scale-105 transition-transform ">
          <div className="flex md:flex-col md:gap-2 gap-10 mt-2">
              <button 
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <IoLogoInstagram />
              </button>
              <button 
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaXTwitter />
              </button>
              <button 
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <CiFacebook />
              </button>
              <button 
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaTiktok />
              </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 min-w-[320px]">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="group">
              <h3 className="mb-3 tracking-wider text-lg font-semibold text-zinc-300">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, li) => (
                  <li 
                    key={li}
                    onMouseEnter={() => setIsHovered(`${idx}-${li}`)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <a
                      href="#"
                      className={`relative inline-block transition-all duration-300 text-zinc-400
                        ${isHovered === `${idx}-${li}` ? 'text-zinc-200 translate-x-2' : 'hover:text-zinc-200'}`}
                    >
                      {link}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-500 transition-all duration-300
                        ${isHovered === `${idx}-${li}` ? 'w-full' : ''}`}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[280px] backdrop-blur-sm bg-zinc-800/30 p-6 rounded-lg">
          <h3 className="mb-2 text-lg font-semibold tracking-wider text-zinc-300">NEWSLETTER</h3>
          <p className="text-xs text-zinc-400 mb-2">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex gap-2 mb-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-700/50 text-zinc-100 p-3 rounded-lg w-full placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all duration-300"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-zinc-700 hover:bg-zinc-600 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                SUBSCRIBE
              </button>
            </div>
            {isSubscribed && (
              <div className="absolute -top-8 left-0 right-0 text-center text-zinc-300 text-sm">
                Thanks for subscribing!
              </div>
            )}
          </form>
          <p className="text-[10px] text-zinc-500">
            By subscribing, you consent to receive marketing communications from PRIME using the provided email address and phone number. Consent to receive marketing is not required for purchase. Standard data and messaging rates may apply. You can opt out at any time by contacting us or using the unsubscribe link.
          </p>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-zinc-800 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500">
        <div className="mb-2 md:mb-0">&copy; Prime Hydration LLC</div>
        <div className="flex gap-6 flex-wrap">
          {['Cookie Choices', 'Privacy Policy', 'Terms of Use', 'Accessibility Statement', 'Contact'].map((item, index) => (
            <a 
              key={index}
              href="#" 
              className="hover:text-zinc-300 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
