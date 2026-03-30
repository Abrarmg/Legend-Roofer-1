import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Mock data for blog posts
  const posts = {
    "1": {
      title: "5 Signs Your Roof Needs Immediate Attention",
      date: "March 10, 2026",
      author: "Legend Roofer Team",
      image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p>Your roof is your home's first line of defense against the elements. In Mississauga, where we face everything from heavy snow to intense summer heat, keeping your roof in top shape is crucial. But how do you know when it's time for a repair or replacement? Here are five signs you shouldn't ignore.</p>
        
        <h3>1. Missing or Damaged Shingles</h3>
        <p>After a heavy storm, it's common to find shingles on your lawn. If you see bare spots on your roof or shingles that are curled, cracked, or buckling, your roof's integrity is compromised. These areas are vulnerable to leaks and further damage.</p>
        
        <h3>2. Granules in the Gutters</h3>
        <p>If you notice a lot of sand-like granules in your gutters when you clean them, it's a sign that your shingles are reaching the end of their lifespan. These granules protect the shingles from UV rays; without them, the shingles will brittle and fail quickly.</p>
        
        <h3>3. Water Stains on Ceilings or Walls</h3>
        <p>Don't wait for a drip. Discoloration on your ceiling or walls is a clear indicator of a leak. By the time you see a stain, the water has already traveled through your insulation and structural beams.</p>
        
        <h3>4. Sagging Roof Deck</h3>
        <p>A sagging roof is a serious structural issue. It often indicates long-term water damage that has rotted the wood underneath. If you notice a dip or curve in your roofline, call a professional immediately.</p>
        
        <h3>5. Daylight in the Attic</h3>
        <p>If you can see sunlight peeking through your roof boards from inside your attic, water can definitely get in too. Check your attic regularly for light or signs of moisture.</p>
        
        <p>At Legend Roofer, we provide free inspections to help you identify these issues before they become costly disasters. Contact us today for a professional assessment of your Mississauga home.</p>
      `
    },
    "2": {
      title: "The Benefits of Metal Roofing in Mississauga",
      date: "March 5, 2026",
      author: "Legend Roofer Team",
      image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p>When it comes to choosing a new roof for your Mississauga home, metal roofing is an increasingly popular option. While the initial cost may be higher than traditional asphalt shingles, the long-term benefits are hard to ignore.</p>
        
        <h3>1. Exceptional Durability</h3>
        <p>A properly installed metal roof can last 40 to 70 years, compared to 20-25 years for asphalt. They are resistant to rot, insects, and fire, making them one of the most durable roofing materials available.</p>
        
        <h3>2. Energy Efficiency</h3>
        <p>Metal roofs reflect solar radiant heat, which can reduce cooling costs by 10-25%. In the hot Mississauga summers, this can lead to significant savings on your energy bills.</p>
        
        <h3>3. Environmentally Friendly</h3>
        <p>Metal roofs are often made from 25-95% recycled content and are 100% recyclable at the end of their life. Unlike asphalt shingles, which contribute billions of pounds of waste to landfills annually, metal is a sustainable choice.</p>
        
        <h3>4. Weather Resistance</h3>
        <p>Metal roofing is designed to withstand extreme weather, including heavy snow loads and high winds. Snow slides off easily, preventing ice dams that can cause significant damage to your home.</p>
        
        <p>If you're considering a roof replacement, metal roofing might be the last roof you ever need to buy. Contact Legend Roofer for a free consultation and estimate.</p>
      `
    },
    "3": {
      title: "How to Prepare Your Roof for the Winter Season",
      date: "February 28, 2026",
      author: "Legend Roofer Team",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1200&auto=format&fit=crop",
      content: `
        <p>Winter in the Greater Toronto Area can be brutal on your roofing system. Between heavy snow, ice accumulation, and extreme temperature fluctuations, your roof takes a beating. Proactive preparation is the key to avoiding leaks and structural damage.</p>
        
        <h3>1. Clean Your Gutters</h3>
        <p>Clogged gutters are the primary cause of ice dams. When water can't drain, it freezes at the roof edge, forcing water back under your shingles. Ensure your gutters and downspouts are clear of leaves and debris.</p>
        
        <h3>2. Inspect Flashing and Seals</h3>
        <p>Check the flashing around chimneys, vents, and skylights. These are the most common points of failure. Ensure the seals are intact and there are no gaps where water could enter.</p>
        
        <h3>3. Check Attic Insulation and Ventilation</h3>
        <p>Proper attic temperature is crucial. If your attic is too warm, it melts the snow on your roof, which then refreezes at the cold eaves, creating ice dams. Ensure you have adequate insulation and clear vents.</p>
        
        <h3>4. Remove Overhanging Branches</h3>
        <p>Heavy snow and ice can cause branches to snap and fall on your roof. Trim any branches that hang over your house to prevent physical damage during winter storms.</p>
        
        <p>Don't wait for the first snowstorm to find out your roof has a problem. Schedule a free winter readiness inspection with Legend Roofer today.</p>
      `
    }
  };

  const post = posts[id as keyof typeof posts];

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-orange-600 font-bold hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <Link to="/blog" className="inline-flex items-center gap-2 text-orange-500 font-bold mb-6 hover:text-orange-400 transition-colors">
                <ArrowLeft size={20} />
                Back to Blog
              </Link>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-slate-300">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User size={18} />
                  {post.author}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg prose-slate max-w-none 
                prose-headings:text-slate-900 prose-headings:font-black 
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-a:text-orange-600 prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="font-bold text-slate-900 flex items-center gap-2">
                  <Share2 size={20} />
                  Share this post:
                </span>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-600 hover:text-white transition-all">
                    <Facebook size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-600 hover:text-white transition-all">
                    <Twitter size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-600 hover:text-white transition-all">
                    <Linkedin size={18} />
                  </button>
                </div>
              </div>
              <Link to="/contact-us" className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-700 transition-all">
                Get a Free Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts or CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Need Professional Roofing Advice?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Our experts are here to help you with any roofing questions or concerns. Schedule a free inspection today.
          </p>
          <Link to="/contact-us" className="inline-block bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl">
            Book Your Free Inspection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
