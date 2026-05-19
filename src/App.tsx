/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  TrendingUp, 
  GraduationCap, 
  Heart, 
  ChevronRight, 
  MessageSquare,
  Star,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const smsHref = "sms:+19047538221?&body=Hi,%20I'd%20like%20to%20reserve%20my%20spot%20for%20the%20Town%20Hall%20with%20Paul%20Renner.%20Please%20find%20my%20full%20name%20below:%0A[Enter%20First%20and%20Last%20Name]";

  const topics = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Economic Opportunity",
      desc: "Strengthening the local workforce and small business climate."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Educational Excellence",
      desc: "Shaping the future of our schools and vocational training."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Family & Values",
      desc: "Preserving the core principles that build our community."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Immigrants and Americans Together",
      desc: "Bringing communities together to connect, grow, and lead."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-magenta/10 text-brand-brown font-sans">
      {/* SECTION 1: Header / Hero */}
      <header className="relative py-20 px-6 md:py-32 lg:py-40 bg-white border-b border-brand-brown/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-magenta/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-brand-magenta px-4 py-2 rounded-full mb-8 shadow-lg shadow-brand-magenta/20">
              <span className="text-white font-bold tracking-widest uppercase text-xs">Networking Event</span>
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-medium text-brand-brown">
              Empowering Jacksonville: <br />
              <span className="italic text-brand-magenta">Paul Renner</span>
            </h1>
            
            <p className="font-display italic text-2xl md:text-3xl text-brand-brown/60 mb-8">
              The Former Speaker Of The House
            </p>

            <p className="text-xl md:text-2xl text-brand-brown/70 mb-12 leading-relaxed font-sans max-w-2xl mx-auto">
              Bridging the gap between our local leaders, business owners, and the community. Join the decisive conversation on the future of our city.
            </p>
            
            <div className="flex flex-col items-center gap-4 justify-center">
              <a 
                href="#rsvp-section"
                className="bg-[#AD005B] hover:bg-[#8A0048] text-white font-bold py-5 px-10 rounded-full shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center gap-3 uppercase tracking-wider text-lg active:scale-95"
              >
                Reserve my spot via SMS
                <MessageSquare className="w-5 h-5" />
              </a>
              <p className="text-sm text-brand-brown/40 italic">Please include your first and last name in the text message.</p>
              <div className="flex items-center gap-2 text-brand-brown/50 font-medium mt-2">
                <Star className="w-5 h-5 text-brand-blue fill-brand-blue" />
                Immigrants and Americans Together
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* SECTION 2: Value Pillars */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl mb-6 text-brand-brown">
            Our <span className="italic">Vision</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-magenta mx-auto rounded-full mb-8" />
          <p className="text-xl text-brand-brown/60 max-w-3xl mx-auto leading-relaxed">
            Bring communities together to connect, grow, and lead. Join Paul Renner and be part of Florida's future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic, i) => (
            <motion.div 
              key={topic.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-brand-brown/5 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-magenta/5 text-brand-magenta flex items-center justify-center mb-6 group-hover:bg-brand-magenta group-hover:text-white transition-colors duration-300">
                {topic.icon}
              </div>
              <h3 className="font-bold text-xl text-brand-brown mb-3">{topic.title}</h3>
              <p className="text-brand-brown/60 leading-relaxed">{topic.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Event Logistics */}
      <section id="rsvp-section" className="py-24 px-6 bg-brand-brown text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-magenta/10 via-transparent to-transparent opacity-50" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-magenta font-black uppercase tracking-[0.3em] text-sm mb-6 block">Join us at</span>
            <h2 className="font-display text-4xl md:text-6xl mb-8 leading-tight">
              1440 San Marco Blvd <br />
              <span className="text-brand-cream/60 text-2xl md:text-4xl block mt-4">Jacksonville, FL 32207</span>
            </h2>
            <p className="text-brand-cream/70 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
              Save the Date: <span className="text-white font-bold italic">Thursday, June 3 | 12:00 PM – 3:00 PM</span>. <br />
              <span className="text-sm opacity-80 italic mt-2 block">Please ensure you provide your first and last name in the registration text.</span>
            </p>

            <a 
              href={smsHref}
              className="bg-[#AD005B] hover:bg-[#8A0048] text-white font-bold py-6 px-12 rounded-full shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center gap-4 uppercase tracking-widest text-xl active:scale-95"
            >
              RESERVE MY SPOT VIA SMS
              <ChevronRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 bg-white border-t border-brand-brown/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-brand-brown font-bold text-lg">
              Jacksonville Progress Initiative
            </p>
            <p className="text-brand-brown/40 text-sm">
              Committed to the future of Jacksonville, Florida.
            </p>
          </div>
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-3 mb-2">
               <span className="w-3 h-3 rounded-full bg-brand-magenta" />
               <p className="font-bold text-brand-brown">RSVP: (904) 753-8221</p>
               <span className="w-3 h-3 rounded-full bg-brand-blue" />
            </div>
            <p className="text-xs text-brand-brown/40 max-w-xs italic leading-relaxed">
              By clicking "RESERVE MY SPOT VIA SMS", you will be redirected to your default messaging app. Please remember to include your full name in the message.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
