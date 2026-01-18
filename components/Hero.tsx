
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Clock, Globe, Zap, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white hero-gradient">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-full bg-grid z-[-1] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-slate-900 text-white px-6 py-2.5 rounded-full mb-12 border border-slate-800 shadow-2xl"
        >
          <Zap className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
          <span className="text-[10px] font-black tracking-[0.3em] uppercase">Powered by Nexaforge Technologies</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-[9rem] font-black text-blue-950 mb-10 tracking-tighter leading-[0.85]"
        >
          National Health <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-400">
            Intelligent.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-500 mb-14 leading-relaxed font-medium"
        >
          VitalPoint is building the next generation of unified US health systems. 
          Powered by Nexaforge for 100% secure, cross-state patient data intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button className="group w-full sm:w-auto bg-blue-600 text-white px-12 py-6 rounded-[2rem] text-xl font-black shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center justify-center">
            Join Waitlist
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-white border-2 border-slate-100 text-slate-900 px-12 py-6 rounded-[2rem] text-xl font-black hover:bg-slate-50 hover:border-slate-200 transition-all">
            See Technology
          </button>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Shield, title: "Nexaforge Shield", desc: "Enterprise encryption standards exceeding HIPAA and SOC2 Type II requirements." },
            { icon: Clock, title: "Zero Latency", desc: "Real-time records and diagnostic sharing across all US states powered by edge compute." },
            { icon: Globe, title: "Unified Mesh", desc: "A single intelligent software layer connecting every touchpoint in American healthcare." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + idx * 0.2 }}
              className="bg-white/50 backdrop-blur-md p-12 rounded-[3.5rem] border border-slate-100 text-left group hover:bg-white hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-5 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
