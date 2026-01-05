'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-mauve-700 mb-6">
          Dear Elana
        </h1>
        <p className="text-xl md:text-2xl text-mauve-600 mb-12 max-w-md mx-auto">
          A journey through my heart, my thoughts, and everything you mean to me
        </p>
      <Link href="/learnings">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-mauve-600 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-mauve-700 transition-colors"
          >
            Begin Journey
          </motion.button>
      </Link>
      </motion.div>
    </div>
  );
}