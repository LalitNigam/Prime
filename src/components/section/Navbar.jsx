import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // Hide navbar on scroll down
      } else {
        setShowNav(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md px-6 py-4 flex items-center justify-between z-900"
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="Prime text-3xl">P R I M E</div>
      <div className="md:space-x-20 space-x-3">
        <Link to="/" className="hover:text-rose-600 font-bold md:text-2xl">Home</Link>
        <Link to="/products" className="hover:text-rose-600 font-bold md:text-2xl">Products</Link>
        <Link to="/login" className="hover:text-rose-600 font-bold border-2 p-2 rounded-xl bg-rose-600 hover:bg-rose-300 md:text-2xl">Login</Link>
      </div>
    </motion.nav>
  );
}
