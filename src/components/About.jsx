import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const stats = [
    {
      icon: <Building2 className="w-10 h-10 text-secondary" />,
      value: '15+',
      label: 'Anos de Experiência',
    },
    {
      icon: <Users className="w-10 h-10 text-secondary" />,
      value: '100+',
      label: 'Projetos Concluídos',
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-secondary" />,
      value: '99%',
      label: 'Satisfação dos Clientes',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <span className="text-secondary font-semibold">
              SOBRE A NTC BRASIL
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2 mb-6">
              Compromisso com a Excelência em Cada Tijolo
            </h2>
            <p className="text-dark-gray/80 mb-4 leading-relaxed">
              Na NTC Brasil, nossa missão é ir além da construção de edifícios.
              Nós construímos legados. Com uma equipe de especialistas dedicados
              e um portfólio de sucesso, garantimos que cada projeto seja um
              marco de qualidade, inovação e sustentabilidade.
            </p>
            <p className="text-dark-gray/80 leading-relaxed">
              Acreditamos que a base de um grande projeto é a confiança. Por
              isso, trabalhamos com total transparência, mantendo nossos
              clientes informados em cada etapa do processo, desde o
              planejamento inicial até a entrega final das chaves.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-light-gray p-6 rounded-xl text-center shadow-sm hover:shadow-card transition-shadow duration-300"
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-dark-gray/70 mt-1">{stat.label}</p>
              </motion.div>
            ))}
            <motion.div
              variants={itemVariants}
              className="bg-secondary text-white p-6 rounded-xl text-center shadow-card hover:shadow-card-hover transition-shadow duration-300 sm:col-span-2 flex flex-col justify-center items-center"
            >
              <p className="text-xl font-bold">
                Pronto para construir seu sonho?
              </p>
              <p className="mt-2 text-white/90">
                Vamos transformar sua visão em realidade.
              </p>
              <a
                href="#contact"
                className="mt-4 bg-white text-secondary font-bold py-2 px-5 rounded-full hover:bg-gray-100 transition-colors"
              >
                Fale Conosco
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
