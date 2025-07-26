import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold">FALE CONOSCO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mt-2">
            Vamos construir juntos!
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-dark-gray/80">
            Entre em contato hoje mesmo e comece seu projeto! Estamos prontos
            para transformar sua visão em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark-gray"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark-gray"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark-gray"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary flex items-center justify-center gap-2 disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin" size={20} /> Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} /> Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
              {submitSuccess && (
                <div className="flex items-center gap-2 text-green-600 bg-green-100 p-3 rounded-md">
                  <CheckCircle size={20} /> Mensagem enviada com sucesso!
                  Entraremos em contato em breve.
                </div>
              )}
              {submitError && (
                <div className="flex items-center gap-2 text-red-600 bg-red-100 p-3 rounded-md">
                  <AlertTriangle size={20} /> Erro: {submitError}
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent">E-mail</h3>
                <p className="text-dark-gray/80">
                  Envie-nos uma mensagem a qualquer hora.
                </p>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="text-secondary hover:underline"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent">Telefone</h3>
                <p className="text-dark-gray/80">
                  Fale com nossa equipe de especialistas.
                </p>
                <a
                  href="tel:+5544991040774"
                  className="text-secondary hover:underline"
                >
                  +55 44 99104-0774
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent">Endereço</h3>
                <p className="text-dark-gray/80">Venha nos fazer uma visita.</p>
                <p className="text-dark-gray/80">
                  Rua Padre Lebret, 801, G05, Bloco 03
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
