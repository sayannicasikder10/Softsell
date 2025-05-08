import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20 px-6 text-center">
      {/* Animated Headline */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}  // Starting position
        animate={{ opacity: 1, y: 0 }}    // Ending position
        transition={{ duration: 1 }}      // Duration of the animation
      >
        Turn Unused Software Into Cash
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        className="text-lg md:text-xl mb-8"
        initial={{ opacity: 0, y: -30 }}  // Starting position
        animate={{ opacity: 1, y: 0 }}    // Ending position
        transition={{ duration: 1, delay: 0.3 }}  // Duration & Delay
      >
        We help companies resell their unused software licenses—fast, easy, and legal.
      </motion.p>

      {/* Animated Button */}
      <motion.button
        className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        initial={{ opacity: 0, scale: 0.8 }}  // Start with a smaller scale and 0 opacity
        animate={{ opacity: 1, scale: 1 }}    // End with full opacity and normal scale
        transition={{ duration: 1, delay: 0.6 }}  // Duration & Delay
      >
        Sell My Licenses
      </motion.button>
    </section>
  );
};

export default Hero;
