
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Stethoscope, 
  Smartphone, 
  Database, 
  Zap, 
  Users 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Telehealth Redefined",
      desc: "High-definition video consultations with specialized practitioners within minutes.",
      icon: Stethoscope,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Smart Patient Portal",
      desc: "Access all your records, prescriptions, and lab results in one intuitive dashboard.",
      icon: Smartphone,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "AI-Powered Insights",
      desc: "Predictive health monitoring to catch potential issues before they become emergencies.",
      icon: Zap,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Secure Data Mesh",
      desc: "Blockchain-inspired secure sharing between your primary care and specialists.",
      icon: Database,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Vitals Integration",
      desc: "Seamlessly sync with Apple Health, Google Fit, and wearable medical devices.",
      icon: Heart,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Family Management",
      desc: "Manage the health of your children and elderly parents from a single account.",
      icon: Users,
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-6"
          >
            System Infrastructure Designed <br /> for Modern Care
          </motion.h2>
          <p className="text-slate-600 text-lg">
            Our upcoming platform integrates every touchpoint of the healthcare journey, 
            eliminating friction for both patients and providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-100/30 transition-all"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
