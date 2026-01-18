
import React from 'react';
import { motion } from 'framer-motion';

const LaunchCountdown: React.FC = () => {
  return (
    <section id="launch" className="py-24 bg-blue-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Be Part of the Revolution
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-100 text-lg mb-12"
        >
          We're currently in closed beta with select hospitals across New York and California. 
          General release for all 50 states begins in Q3 2025.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg p-1 rounded-2xl flex flex-col md:flex-row items-center max-w-lg mx-auto border border-white/20"
        >
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="flex-1 bg-transparent border-none focus:ring-0 px-6 py-4 w-full md:w-auto text-white placeholder:text-blue-200 outline-none"
          />
          <button className="w-full md:w-auto bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors m-1">
            Notify Me
          </button>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Waitlist', val: '24k+' },
            { label: 'Providers', val: '120+' },
            { label: 'Regions', val: 'US-Wide' },
            { label: 'HIPAA', val: 'Compliant' }
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
              <div className="text-sm text-blue-300 font-medium uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchCountdown;
