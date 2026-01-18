
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIAssistant from './components/AIAssistant';
import LaunchCountdown from './components/LaunchCountdown';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <div className="py-12 bg-white overflow-hidden border-y border-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-8">Institutional Infrastructure</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <span className="text-xl font-black text-slate-900 tracking-tighter">NY-PRESBYTERIAN</span>
              <span className="text-xl font-black text-slate-900 tracking-tighter italic">MAYO CLINIC</span>
              <span className="text-xl font-black text-slate-900 tracking-tighter">KAISER PERMANENTE</span>
              <span className="text-xl font-black text-slate-900 tracking-tighter italic">JOHNS HOPKINS</span>
              <span className="text-xl font-black text-slate-900 tracking-tighter underline decoration-blue-500">NEXAFORGE</span>
            </div>
          </div>
        </div>

        <Features />

        {/* US Regional Rollout Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                   <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-slate-900 mb-6 leading-tight"
                   >
                     Strategically Launching <br /> across the United States
                   </motion.h2>
                   <p className="text-slate-600 text-lg mb-8">
                     Our phased deployment ensures that every region receives the full power of the Nexaforge-optimized healthcare stack.
                   </p>
                   
                   <div className="space-y-6">
                      {[
                        { region: "Northeast", status: "Beta Live", date: "Available Now" },
                        { region: "West Coast", status: "Onboarding", date: "April 2025" },
                        { region: "The South", status: "Pre-Launch", date: "June 2025" },
                        { region: "Midwest", status: "Infrastructure", date: "August 2025" },
                      ].map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:shadow-blue-100/30 transition-all group"
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i === 0 ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
                              <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900">{item.region}</h4>
                              <p className="text-xs text-slate-500">{item.status}</p>
                            </div>
                          </div>
                          <div className="text-right">
                             <p className="text-sm font-bold text-blue-600">{item.date}</p>
                             <ArrowRight className="w-4 h-4 ml-auto text-slate-300 group-hover:text-blue-500 transition-colors" />
                          </div>
                        </motion.div>
                      ))}
                   </div>
                </div>
                
                <div className="lg:w-1/2 relative">
                   <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-square bg-blue-50 rounded-[3rem] relative flex items-center justify-center p-8 overflow-hidden"
                   >
                      <div className="absolute inset-0 bg-grid opacity-30"></div>
                      {/* Abstract Map Visualization */}
                      <div className="relative w-full h-full border-2 border-blue-200/50 rounded-2xl flex items-center justify-center">
                         <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>
                         <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full"></div>
                         <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
                         <div className="w-3/4 h-2/3 border border-blue-100 rounded-full flex items-center justify-center">
                            <div className="w-1/2 h-1/2 border border-blue-200 rounded-full flex items-center justify-center">
                               <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                                  <MapPin className="text-blue-600" />
                               </div>
                            </div>
                         </div>
                      </div>
                      <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-xl">
                         <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Network Status</p>
                         <h4 className="font-bold text-slate-900">12,400+ Nodes Ready</h4>
                         <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: '75%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                              className="h-full bg-emerald-500"
                            />
                         </div>
                      </div>
                   </motion.div>
                </div>
             </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section id="mission" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
                  alt="US Medical Research Center" 
                  className="rounded-[3rem] shadow-2xl relative z-10 border-4 border-white"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-3xl z-0 hidden md:block"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-400 rounded-full blur-2xl opacity-20 z-0"></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Healthcare Built for the Digital Frontier.</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Nexaforge Technologies powers our backend, providing a robust software layer that allows patients to transition seamlessly between US states and providers without losing their medical context.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Nexaforge Cloud Security",
                  "Cross-State Interop",
                  "Edge-Enabled Telehealth",
                  "Patient Identity Mesh"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-slate-700 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <LaunchCountdown />
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
