import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceAreas = () => {
  const neighborhoods = [
    "Streetsville",
    "Erin Mills",
    "Cooksville",
    "Port Credit",
    "Square One",
    "Applewood",
    "Rathwood"
  ];

  return (
    <section id="service-areas" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Service Areas in Mississauga</h2>
          <p className="text-lg text-slate-600">
            Legend Roofer is proud to serve the entire Mississauga area, including neighborhoods such as:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {neighborhoods.map((area, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl hover:border-orange-600/20 transition-all duration-300">
              <div className="bg-orange-50 text-orange-600 p-3 rounded-xl mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <span className="font-bold text-slate-800">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
