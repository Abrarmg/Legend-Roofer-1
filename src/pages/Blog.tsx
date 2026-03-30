import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "5 Signs Your Roof Needs Immediate Attention",
      excerpt: "Don't wait for a leak to become a flood. Learn the early warning signs of roof damage that every homeowner should know.",
      date: "March 10, 2026",
      author: "Legend Roofer Team",
      image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "The Benefits of Metal Roofing in Mississauga",
      excerpt: "Discover why more Mississauga residents are choosing metal roofing for its durability, energy efficiency, and long-term value.",
      date: "March 5, 2026",
      author: "Legend Roofer Team",
      image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "How to Prepare Your Roof for the Winter Season",
      excerpt: "Winter can be harsh on your roof. Follow our comprehensive guide to ensure your home stays warm and dry during the coldest months.",
      date: "February 28, 2026",
      author: "Legend Roofer Team",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div>
      <div className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            Roofing <span className="text-orange-500">Insights</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest tips, trends, and advice from the experts at Legend Roofer.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                    Roofing Tips
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-orange-600 font-bold group/btn">
                    Read More
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-8">Want More Legendary Tips?</h2>
          <div className="max-w-xl mx-auto flex gap-4">
            <input type="email" placeholder="Enter your email" className="bg-white border border-slate-200 rounded-xl px-6 py-4 w-full focus:outline-none focus:ring-2 focus:ring-orange-600" />
            <button className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold whitespace-nowrap hover:bg-orange-700 transition-all">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
