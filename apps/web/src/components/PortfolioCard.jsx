
import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ image, title, category, onClick, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm font-medium text-secondary mb-1">{category}</p>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
