'use client';

import { motion } from 'framer-motion';

export default function TestComponent() {
  return (
    <div className="min-h-screen bg-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-black mb-4">
          Test Component
        </h1>
        <p className="text-gray-600 mb-4">
          If you can see this, basic functionality is working.
        </p>
        <div className="bg-yellow-400 text-black p-4 rounded-lg">
          Gold accent color test
        </div>
      </motion.div>
    </div>
  );
}
