import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative bg-light-gray pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-accent leading-tight tracking-tighter mb-6"
          >
            Transformando Visões em
            <br />
            <span className="gradient-text">Realidade Sólida</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl text-dark-gray/80 mb-10"
          >
            Sua construção com a garantia de qualidade, segurança e eficiência
            que só a NTC Brasil oferece. Vamos construir juntos um futuro
            melhor.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="btn btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Comece seu Projeto
              <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn btn-secondary w-full sm:w-auto">
              Saiba Mais
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
