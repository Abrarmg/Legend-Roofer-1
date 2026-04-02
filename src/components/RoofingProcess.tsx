import React from 'react';

const RoofingProcess = () => {
  const steps = [
    {
      title: "Inspection",
      description: "We start with a careful inspection to check for leaks, damaged shingles, and flashing issues to understand your roof's condition."
    },
    {
      title: "Estimate",
      description: "After the inspection, we provide a straightforward quote with honest recommendations for your home or business."
    },
    {
      title: "Planning",
      description: "Once approved, we schedule the work and prepare the area to protect your property and ensure everything is organized."
    },
    {
      title: "Execution",
      description: "Our skilled roofers complete the job using durable materials and trusted methods for long-lasting roofing solutions."
    },
    {
      title: "Verification",
      description: "When finished, we inspect everything again and clean the site properly to ensure your roof is secure and property is neat."
    },
    {
      title: "Support",
      description: "We stand behind our work and deliver dependable roofing services that Mississauga property owners can trust."
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Workflow</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Roofing Process</h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden xl:block absolute top-[4rem] left-0 w-full h-0.5 bg-slate-200 z-0"></div>
          {/* Connecting Line for Mobile */}
          <div className="md:hidden absolute top-[3rem] bottom-0 left-1/2 w-0.5 bg-slate-200 -translate-x-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, i) => (
              <div 
                key={i}
                data-delay={i * 0.1}
                className="group scroll-reveal scroll-reveal-scale"
              >
                <div className="bg-white p-6 xl:p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-orange-600/30 hover:shadow-[0_20px_50px_rgba(245,73,0,0.08)] transition-all duration-500 flex flex-col h-full text-center xl:text-left relative z-10">
                  <div className="w-12 h-12 flex-shrink-0 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black text-lg mb-4 xl:mb-6 shadow-lg shadow-orange-600/20 group-hover:scale-110 transition-transform mx-auto xl:mx-0 relative z-20">
                    {i + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingProcess;
