
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIAssistant from './components/AIAssistant';
import LaunchCountdown from './components/LaunchCountdown';
import Footer from './components/Footer';
import { MapPin, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <div className="py-16 bg-white overflow-hidden border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-10">Infrastructure Partners & Integration</p>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
              <span className="text-2xl font-black text-slate-900 tracking-tighter">NY-PRESBYTERIAN</span>
              <span className="text-2xl font-black text-slate-900 tracking-tighter italic">MAYO CLINIC</span>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">KAISER PERMANENTE</span>
              <span className="text-2xl font-black text-slate-900 tracking-tighter underline decoration-blue-500 underline-offset-8">NEXAFORGE</span>
              <span className="text-2xl font-black text-slate-900 tracking-tighter italic">JOHNS HOPKINS</span>
            </div>
          </div>
        </div>

        <Features />

        {/* US Regional Rollout Section */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2">
                   <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full mb-6 border border-emerald-100"
                   >
                     <ShieldCheck className="w-4 h-4" />
                     <span className="text-xs font-black uppercase tracking-widest">Phased US Rollout</span>
                   </motion.div>
                   
                   <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-black text-blue-950 mb-8 leading-[1.1] tracking-tight"
                   >
                     Unified Infrastructure <br /> From Coast to Coast
                   </motion.h2>
                   
                   <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
                     Nexaforge Technologies powers the backend mesh, ensuring sub-second latency for patient records regardless of which US state you are in.
                   </p>
                   
                   <div className="grid gap-4">
                      {[
                        { region: "Northeast Corridor", status: "Active Beta", date: "NYC / BOS Live" },
                        { region: "West Coast Hub", status: "Onboarding", date: "SF / LA - April '25" },
                        { region: "The South", status: "Provisioning", date: "ATL / DAL - June '25" },
                        { region: "Midwest", status: "Infrastructure", date: "CHI / DET - Aug '25" },
                      ].map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-between p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100/40 transition-all group"
                        >
                          <div className="flex items-center space-x-5">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${i === 0 ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' : 'bg-white text-blue-600 shadow-sm'}`}>
                              <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900">{item.region}</h4>
                              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{item.status}</p>
                            </div>
                          </div>
                          <div className="text-right">
                             <p className="text-sm font-black text-blue-600 mb-1">{item.date}</p>
                             <ArrowRight className="w-4 h-4 ml-auto text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                          </div>
                        </motion.div>
                      ))}
                   </div>
                </div>
                
                <div className="lg:w-1/2 relative">
                   <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-square bg-blue-600 rounded-[4rem] relative flex items-center justify-center p-12 overflow-hidden shadow-2xl shadow-blue-200"
                   >
                      <div className="absolute inset-0 bg-grid opacity-20 invert"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-transparent"></div>
                      
                      {/* Map Visualization Abstract */}
                      <div className="relative w-full h-full border-2 border-white/20 rounded-[3rem] flex items-center justify-center">
                         <motion.div 
                          animate={{ opacity: [0.4, 1, 0.4] }} 
                          transition={{ repeat: Infinity, duration: 3 }}
                          className="absolute top-1/4 left-1/4 w-6 h-6 bg-emerald-400 rounded-full blur-md"
                         />
                         <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full shadow-xl"></div>
                         <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full shadow-xl"></div>
                         
                         <div className="w-3/4 h-3/4 border border-white/10 rounded-full flex items-center justify-center">
                            <div className="w-1/2 h-1/2 border border-white/20 rounded-full flex items-center justify-center">
                               <div className="w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                                  <Zap className="text-blue-600 fill-current w-8 h-8" />
                               </div>
                            </div>
                         </div>
                      </div>

                      <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-xl p-8 rounded-[2rem] border border-white shadow-2xl">
                         <div className="flex justify-between items-end mb-4">
                            <div>
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Live Mesh Nodes</p>
                               <h4 className="text-2xl font-black text-slate-900 tracking-tighter">12,482 Active</h4>
                            </div>
                            <div className="bg-emerald-500 w-3 h-3 rounded-full animate-pulse mb-2"></div>
                         </div>
                         <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: '88%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 2, ease: "easeOut" }}
                              className="h-full bg-blue-600"
                            />
                         </div>
                         <p className="text-[10px] text-slate-400 font-bold mt-3 text-right">SYSTEM STABILITY: 99.99%</p>
                      </div>
                   </motion.div>
                </div>
             </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section id="mission" className="py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-40"></div>
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                  alt="US Medical Innovation" 
                  className="rounded-[4rem] shadow-2xl relative z-10 border-[12px] border-white group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-[3rem] z-0 hidden md:block"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl opacity-20 z-0"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-5xl font-black text-blue-950 mb-8 leading-tight tracking-tight">The Digital Backbone <br /> of Modern Care.</h2>
              <p className="text-slate-600 text-xl mb-10 leading-relaxed font-medium">
                VitalPoint isn't just an app—it's a mission to fix the fragmented US healthcare experience. 
                Powered by Nexaforge, we provide the sub-layer that keeps your health data secure and portable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  "Nexaforge Mesh Shield",
                  "Coast-to-Coast Access",
                  "AI-Optimized Triage",
                  "HIPAA Edge Storage"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <Zap className="w-5 h-5 fill-current" />
                    </div>
                    <span className="text-slate-800 font-bold text-sm">{item}</span>
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
