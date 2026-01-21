import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import { HERO_BG } from '../lib/heroBg';

interface HeroProps {
  showScrollIndicator?: boolean;
}

const Hero = ({ showScrollIndicator = true }: HeroProps) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className="hero-section min-h-[220px] py-4 pt-8 flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground/90 text-xs font-medium mb-4 border border-accent/30"
          >
          
          </motion.span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-4 leading-tight">
            Welcome to{' '}
            <span className="text-accent">Scalable Architecture Lab</span>
            
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base text-hero-foreground/70 mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            SAL is recruiting passionate undergraduate, masters, and Ph.D students interested in
            computer architecture, memory systems, and high-performance computing.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="mailto:sal@skku.edu" className="btn-primary gap-2">
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <button onClick={scrollToContent} className="btn-outline text-hero-foreground border-hero-foreground/40 hover:bg-hero-foreground/10 hover:text-hero-foreground">
              Learn More
            </button>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll Indicator
      {showScrollIndicator && (
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-hero-foreground/60 hover:text-hero-foreground transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      )} */}
    </section>
  );
};

export default Hero;
