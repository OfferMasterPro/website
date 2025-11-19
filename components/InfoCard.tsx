'use client';

import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  isScrollable?: boolean;
}

const InfoCard = ({ title, children, isScrollable = true }: InfoCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="p-8 bg-gray-100 rounded-lg shadow-md flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className={`flex-grow ${isScrollable ? 'max-h-48 overflow-y-auto' : ''}`}>
        <div className="text-gray-600 space-y-2 pr-2">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default InfoCard;
