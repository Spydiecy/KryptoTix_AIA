'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Ticket, 
  Calendar, 
  Shield, 
  Users, 
  Zap, 
  Globe,
  ChevronRight,
  Clock,
  Wallet,
  CheckCircle2
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2 
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const stats = [
  { label: 'Active Events', value: '100+' },
  { label: 'Tickets Sold', value: '10k+' },
  { label: 'Users', value: '5000+' },
  { label: 'Countries', value: '30+' },
];

const howItWorks = [
  {
    icon: <Wallet className="text-purple-400" size={24} />,
    title: 'Connect Wallet',
    description: 'Link your Web3 wallet to get started'
  },
  {
    icon: <Calendar className="text-purple-400" size={24} />,
    title: 'Choose Event',
    description: 'Browse and select from various events'
  },
  {
    icon: <Ticket className="text-purple-400" size={24} />,
    title: 'Buy Tickets',
    description: 'Purchase tickets securely with crypto'
  },
  {
    icon: <CheckCircle2 className="text-purple-400" size={24} />,
    title: 'Attend Event',
    description: 'Show your NFT ticket at the venue'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text relative z-10"
          variants={itemVariants}
        >
          Welcome to KryptoTix
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-12 max-w-2xl text-gray-300"
          variants={itemVariants}
        >
          Experience the future of event ticketing with blockchain technology.
          Secure, transparent, and seamless.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-16"
          variants={itemVariants}
        >
          <Link 
            href="/events" 
            className="gradient-button group px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center"
          >
            Explore Events
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/create-event" 
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-white px-8 py-3 rounded-full text-lg font-semibold"
          >
            Create Event
          </Link>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-24 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
          variants={itemVariants}
        >
          Why Choose KryptoTix?
        </motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature 
            icon={<Shield size={40} />}
            title="Secure Ticketing"
            description="NFT-based tickets ensure authenticity and prevent fraud. Each ticket is unique and verifiable on the blockchain."
          />
          <Feature 
            icon={<Zap size={40} />}
            title="Instant Transfers"
            description="Seamlessly transfer or resell tickets with smart contract technology. No more complicated paperwork or trust issues."
          />
          <Feature 
            icon={<Globe size={40} />}
            title="Global Access"
            description="Join events from anywhere in the world. Our platform connects event organizers with a global audience."
          />
          <Feature 
            icon={<Users size={40} />}
            title="Community Driven"
            description="Be part of a vibrant community of event organizers and attendees. Share experiences and grow together."
          />
          <Feature 
            icon={<Calendar size={40} />}
            title="Easy Management"
            description="Create and manage events effortlessly. Our intuitive interface makes event organization a breeze."
          />
          <Feature 
            icon={<Clock size={40} />}
            title="Real-Time Updates"
            description="Get instant notifications about event changes, ticket sales, and more. Stay informed and never miss an update."
          />
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-24 px-4 bg-gray-800/50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text"
          variants={itemVariants}
        >
          How It Works
        </motion.h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div 
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-900/50 border border-purple-500/50 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
          variants={itemVariants}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Join thousands of event organizers and attendees who trust KryptoTix
          for secure, transparent event ticketing.
        </motion.p>
        <motion.div
          variants={itemVariants}
        >
          <Link 
            href="/events" 
            className="gradient-button group px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center"
          >
            Get Started Now
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <motion.div 
    className="flex flex-col items-center text-center"
    variants={itemVariants}
  >
    <div className="mb-4 text-purple-400">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);