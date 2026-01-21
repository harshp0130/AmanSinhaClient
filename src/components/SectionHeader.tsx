import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ title, subtitle, align = 'left' }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-accent ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  );
};

export default SectionHeader;
