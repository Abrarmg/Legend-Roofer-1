import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How much does roof repair in Mississauga cost?",
      answer: "The cost of roof repair in Mississauga depends on the type of repair needed, the roofing material, and the size of the area to be repaired. Legend Roofer offers free inspections and competitive pricing. Contact us for a detailed estimate."
    },
    {
      question: "How long will my roof repair take?",
      answer: "The duration of your roof repair depends on the type and extent of the damage. Minor repairs can take a few hours, while more complex repairs may take a day or more. We strive to complete all repairs as quickly as possible without compromising on quality."
    },
    {
      question: "Do you offer emergency roof repair services in Mississauga?",
      answer: "Yes! Legend Roofer offers 24/7 emergency roof repair services in Mississauga. If your roof is leaking or has sustained significant damage, call us immediately, and we will dispatch a team to help you."
    },
    {
      question: "Do you offer roof replacement services?",
      answer: "Yes! In addition to roof repairs, we offer full roof replacement services in Mississauga. If your roof is beyond repair, our team will help you choose the best roofing materials and install a new roof that will last for years to come."
    },
    {
      question: "Are your roof repair services covered by a warranty?",
      answer: "Absolutely! Legend Roofer offers a lifetime guarantee on all roof repairs. We stand behind the quality of our work and ensure that your roof remains in excellent condition for many years."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions (FAQs)</h2>
          <p className="text-lg text-slate-600">Everything you need to know about our roofing services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-slate-50 hover:bg-slate-100 transition-colors">
                  <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                  <ChevronDown className="text-orange-600 group-open:rotate-180 transition-transform" size={24} />
                </summary>
                <div className="p-6 bg-white border-t border-slate-200">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
