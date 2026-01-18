
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Clock, Globe, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-40 z-0"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-grid z-[-1] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-8 border border-blue-100"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-bold tracking-widest uppercase">Powered by Nexaforge Technologies</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-extrabold text-blue-950 mb-8 leading-[1]"
          >
            Unified Health <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Across America
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
          >
            VitalPoint is the next-gen unified health infrastructure. 
            Engineered by Nexaforge for 100% HIPAA-compliant, cross-state patient data intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1">
              Join Waitlist
            </button>
            <button className="w-full sm:w-auto bg-white border-2 border-slate-100 text-slate-900 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 hover:border-slate-200 transition-all">
              Watch 2025 Preview
            </button>
          </motion.div>
        </div>

        {/* Floating Feature Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Federal Standard", desc: "Exceeding US federal healthcare security benchmarks with Nexaforge Shield." },
            { icon: Clock, title: "Instant Vitals", desc: "Real-time health data processing powered by high-speed edge computing." },
            { icon: Globe, title: "Coast to Coast", desc: "Connecting providers from New York to California on a single mesh network." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-xl shadow-blue-100/50 border border-slate-50 text-center group hover:border-blue-200 transition-colors"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
