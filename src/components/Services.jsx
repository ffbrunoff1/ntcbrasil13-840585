import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Target className="w-12 h-12 text-white" />,
      title: 'Qualidade Superior',
      description:
        'Utilizamos os melhores materiais e as técnicas mais avançadas para garantir um acabamento impecável e duradouro em todos os nossos projetos.',
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-white" />,
      title: 'Segurança Inegociável',
      description:
        'Nossa prioridade máxima é a segurança. Seguimos rigorosamente todas as normas e protocolos para proteger nossa equipe, clientes e o seu investimento.',
    },
    {
      icon: <Zap className="w-12 h-12 text-white" />,
      title: 'Eficiência e Pontualidade',
      description:
        'Com um planejamento meticuloso e gestão de projetos otimizada, garantimos a entrega da sua obra dentro do prazo e do orçamento estabelecidos.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-light-gray">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-secondary font-semibold">NOSSA ABORDAGEM</span>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2">
            Os Pilares do Nosso Sucesso
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-dark-gray/80">
            Construir com segurança e eficiência é nossa prioridade. Estes são
            os três pilares fundamentais que guiam cada decisão e ação na NTC
            Brasil.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-card hover:shadow-card-hover p-8 flex flex-col text-center items-center transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-secondary rounded-full p-4 mb-6 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">
                {service.title}
              </h3>
              <p className="text-dark-gray/80 leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
