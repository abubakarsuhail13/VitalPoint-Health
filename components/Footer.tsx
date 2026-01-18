
import React from 'react';
import { Activity, Twitter, Linkedin, Facebook, Heart, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-10">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Activity className="text-white w-6 h-6" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-blue-900">VitalPoint</span>
            </div>
            <p className="text-slate-500 mb-10 leading-relaxed font-medium">
              Transforming US health systems through digital infrastructure unity and secure intelligence.
            </p>
            
            <div className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <div className="flex items-center space-x-2 text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-2">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Technical Partner</span>
              </div>
              <p className="text-xl font-black text-slate-900">Nexaforge Technologies</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-10 uppercase tracking-[0.2em] text-[10px]">The Platform</h4>
            <ul className="space-y-5 font-bold text-sm">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Patient Mesh</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Provider Portal</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Nexaforge Core API</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Rollout Schedule</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-10 uppercase tracking-[0.2em] text-[10px]">Governance</h4>
            <ul className="space-y-5 font-bold text-sm">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Ethics & AI Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">HIPAA Standards</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Federal Interoperability</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Privacy Shield</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-10 uppercase tracking-[0.2em] text-[10px]">Stay Connected</h4>
            <div className="flex space-x-5 mb-10">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-3xl text-slate-400 hover:text-blue-600 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-slate-100">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 font-bold leading-relaxed uppercase tracking-widest">
              Maintained and secured by Nexaforge Engineering in collaboration with US Medical Boards.
            </p>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© 2026 VitalPoint Health Systems • Powered by Nexaforge Technologies</p>
          <div className="flex items-center space-x-1 mt-8 md:mt-0">
            <span>Built for the future of care</span>
            <Heart className="w-4 h-4 text-red-500 fill-current ml-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
