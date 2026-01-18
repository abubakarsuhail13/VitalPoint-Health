
import React from 'react';
import { Activity, Twitter, Linkedin, Facebook, Heart, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Activity className="text-blue-600 w-6 h-6" />
              <span className="text-2xl font-bold tracking-tight text-blue-900">VitalPoint</span>
            </div>
            <p className="text-slate-500 mb-6 leading-relaxed">
              The next generation of unified healthcare infrastructure for the United States. 
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                <Zap className="w-3 h-3 text-blue-600" />
                <span>Technical Partner</span>
              </div>
              <p className="text-sm font-semibold text-slate-700">Nexaforge Technologies</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600">Patient Portal</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600">Provider Dashboard</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600">Nexaforge Core API</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600">Security Whitepaper</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600">Our Story</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600">Medical Board</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600">US State Regulations</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Infrastructure</h4>
            <div className="space-y-4">
              <p className="text-xs text-slate-400 font-medium">Developed and Maintained by:</p>
              <div className="flex items-center space-x-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                 <div className="bg-slate-900 text-white p-1.5 rounded-lg">
                    <Zap className="w-4 h-4" />
                 </div>
                 <span className="font-bold text-slate-900">Nexaforge</span>
              </div>
              <p className="text-xs text-slate-500 leading-tight">
                High-availability cloud systems for regulated industries.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© 2025 VitalPoint Health Systems Inc. All rights reserved.</p>
          <div className="flex items-center space-x-1 mt-4 md:mt-0">
            <span>Powered by</span>
            <span className="font-bold text-slate-600">Nexaforge Technologies</span>
            <Heart className="w-3 h-3 text-red-500 fill-current ml-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
