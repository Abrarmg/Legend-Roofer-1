import React from 'react';
import { Clock, ShieldCheck, Users } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: 'Years in Business', value: '45+', icon: <Clock /> },
    { label: 'Projects Completed', value: '50K+', icon: <ShieldCheck /> },
    { label: 'Expert Installers', value: '500+', icon: <Users /> },
  ];

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-6 group hover:shadow-xl transition-all duration-500">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                {React.cloneElement(stat.icon as React.ReactElement, { size: 32 })}
              </div>
              <div>
                <div className="text-4xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-500 font-medium uppercase tracking-wider text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
