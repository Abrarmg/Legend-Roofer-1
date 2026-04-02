import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Privacy <span className="text-orange-600">Policy</span>
          </h1>
          <p className="text-xl text-slate-600">
            Last Updated: March 31, 2026
          </p>
        </motion.div>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-12">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                <Shield size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 m-0">Introduction</h2>
            </div>
            <p>
              At Legend Roofer, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                <FileText size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 m-0">Information We Collect</h2>
            </div>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
              {[
                "Request a free inspection or estimate",
                "Contact us via our online forms",
                "Subscribe to our communications",
                "Request emergency roofing services",
                "Provide feedback or reviews"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              This information may include your name, email address, phone number, property address, and details about your roofing needs.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                <Eye size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 m-0">How We Use Your Information</h2>
            </div>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Service Delivery</h4>
                <p className="text-sm text-slate-600">To provide the roofing services you request, including inspections, repairs, and replacements.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Communication</h4>
                <p className="text-sm text-slate-600">To respond to your inquiries, provide updates on your project, and send service-related notifications.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Improvement</h4>
                <p className="text-sm text-slate-600">To analyze website usage and improve our services, marketing, and customer experience.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Marketing</h4>
                <p className="text-sm text-slate-600">With your consent, to send you promotional materials and special offers from Legend Roofer.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                <Lock size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 m-0">Data Security</h2>
            </div>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. We use industry-standard encryption and secure storage practices to protect your data from unauthorized access, disclosure, or alteration.
            </p>
          </section>

          <section className="bg-slate-900 text-white p-8 md:p-12 rounded-[3rem]">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-slate-300 mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <span className="text-orange-500 font-bold">Email:</span>
                <a href="mailto:info@legendroofer.com" className="hover:text-orange-500 transition-colors">info@legendroofer.com</a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-orange-500 font-bold">Address:</span>
                <span>Mississauga, ON, Canada</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
