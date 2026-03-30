import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { 
      name: 'Sarah M.', 
      location: 'Mississauga', 
      text: 'Legend Roofer did an amazing job fixing our roof leak in Mississauga. Their team was professional, arrived on time, and explained everything clearly. The repair was completed quickly, and the quality of work was excellent. I highly recommend them to anyone looking for reliable roof repair services.', 
      stars: 5,
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop'
    },
    { 
      name: 'James R.', 
      location: 'Port Credit', 
      text: 'We needed emergency roof repair after a storm, and Legend Roofer responded fast. They inspected the damage, gave us an honest quote, and repaired everything the same day. Their service was friendly, efficient, and stress-free. We are very happy with the results.', 
      stars: 5,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop'
    },
    { 
      name: 'Michael T.', 
      location: 'Streetsville', 
      text: 'Legend Roofer helped us with flat roof repair for our commercial property in Mississauga. From start to finish, they were knowledgeable, professional, and easy to work with. The team paid attention to detail and made sure the job was done properly. Excellent service and great workmanship.', 
      stars: 5,
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop'
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Hear It From Our Customers</h2>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-orange-500 fill-orange-500" size={24} />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={review.img} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg leading-tight">{review.name}</h4>
                    <span className="text-slate-400 text-sm">{review.location}</span>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} size={14} className="text-orange-500 fill-orange-500" />)}
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed flex-grow">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
