import React from "react";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-200 to-rose-900">
      <div className="mb-8 flex items-center space-x-3">
        <span className="text-3xl font-bold text-rose-900 drop-shadow">
          Prime Hydration
        </span>
      </div>
      <motion.form
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="bg-white/30 backdrop-blur-md border border-rose-200 rounded-xl shadow-xl px-8 py-10 flex flex-col items-center w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-4 text-rose-900">
          Create your account
        </h2>
        <input
          type="text"
          required
          placeholder="Full Name"
          className="mb-4 w-full px-4 py-2 rounded border border-rose-200 bg-rose-100 text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-900"
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="mb-4 w-full px-4 py-2 rounded border border-rose-200 bg-rose-100 text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-900"
        />
        <input
          type="password"
          required
          placeholder="Password"
          className="mb-6 w-full px-4 py-2 rounded border border-rose-200 bg-rose-100 text-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-900"
        />
        <button
          type="submit"
          className="w-full py-2 rounded bg-rose-900 text-rose-50 font-bold hover:bg-rose-700 transition"
        >
          Register
        </button>
        <p className="mt-4 text-rose-900 text-sm">
          Already have an account?{" "}
          <a href="/login" className="underline font-semibold">
            Login
          </a>
        </p>
      </motion.form>
      <div className="mt-8 text-rose-100 font-extralight text-xs tracking-wide">
        © {new Date().getFullYear()} Prime Hydration Drink
      </div>
    </div>
  );
}
