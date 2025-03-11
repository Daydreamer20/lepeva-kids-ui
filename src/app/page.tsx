'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Confetti from 'react-confetti';

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set window size for confetti
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Add window resize listener
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStartLearning = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <main className="min-h-screen">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          colors={['#4D96FF', '#FF6B6B', '#FFD166', '#06D6A0', '#FF9E40']}
        />
      )}

      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 left-10 w-24 h-24 rounded-full bg-fun-purple opacity-20"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 rounded-full bg-fun-orange opacity-20"
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-fun-teal opacity-20"
            animate={{
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Header */}
        <header className="relative z-10 py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mr-3"
            >
              <Image
                src="https://api.dicebear.com/7.x/bottts/svg?seed=lepeva&backgroundColor=4D96FF"
                alt="LEPEVA Mascot"
                width={50}
                height={50}
                className="rounded-full"
              />
            </motion.div>
            <h1 className="text-3xl font-display font-bold text-primary">LEPEVA Kids</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/dashboard" className="font-medium text-gray-700 hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/lessons" className="font-medium text-gray-700 hover:text-primary transition-colors">
                  Lessons
                </Link>
              </li>
              <li>
                <Link href="/materials" className="font-medium text-gray-700 hover:text-primary transition-colors">
                  Materials
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-gray-800 mb-6">
              Learn English the <span className="text-primary">Fun</span> Way!
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Join our interactive lessons, play educational games, and collect rewards as you improve your English skills!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={handleStartLearning}
              className="btn-primary text-lg px-8 py-4"
            >
              Start Learning
            </button>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </motion.div>

          {/* Animated illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative w-full max-w-4xl"
          >
            <div className="relative h-[400px]">
              <motion.div
                className="absolute left-0 top-0 w-1/3"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Image
                  src="https://api.dicebear.com/7.x/bottts/svg?seed=kid1&backgroundColor=FFD166"
                  alt="Kid character"
                  width={200}
                  height={200}
                />
              </motion.div>
              
              <motion.div
                className="absolute left-1/3 top-10 w-1/3"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Image
                  src="https://api.dicebear.com/7.x/bottts/svg?seed=kid2&backgroundColor=FF6B6B"
                  alt="Kid character"
                  width={200}
                  height={200}
                />
              </motion.div>
              
              <motion.div
                className="absolute right-0 top-0 w-1/3"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                <Image
                  src="https://api.dicebear.com/7.x/bottts/svg?seed=kid3&backgroundColor=06D6A0"
                  alt="Kid character"
                  width={200}
                  height={200}
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-background-light">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">
                Fun Learning Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover all the exciting ways to learn English with LEPEVA Kids!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Interactive Lessons",
                  description: "Engage with fun, animated lessons that make learning English exciting!",
                  icon: "https://api.dicebear.com/7.x/icons/svg?seed=book",
                  color: "bg-fun-purple",
                },
                {
                  title: "Educational Games",
                  description: "Play games that reinforce vocabulary, grammar, and pronunciation.",
                  icon: "https://api.dicebear.com/7.x/icons/svg?seed=game",
                  color: "bg-fun-orange",
                },
                {
                  title: "Reward System",
                  description: "Earn badges, points, and unlock special characters as you progress!",
                  icon: "https://api.dicebear.com/7.x/icons/svg?seed=star",
                  color: "bg-fun-green",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="card hover:scale-105 transition-transform duration-300"
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Start Your English Adventure?
            </h2>
            <p className="text-xl mb-10 text-blue-100">
              Join thousands of kids who are learning English while having fun!
            </p>
            <button
              onClick={handleStartLearning}
              className="bg-white text-primary font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Get Started Now
            </button>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-display font-bold mb-4">LEPEVA Kids</h3>
              <p className="text-gray-300">
                Making English learning fun and engaging for children around the world.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="/lessons" className="text-gray-300 hover:text-white transition-colors">Lessons</Link></li>
                <li><Link href="/materials" className="text-gray-300 hover:text-white transition-colors">Materials</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} LEPEVA Kids. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}