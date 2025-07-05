import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useStore } from '../../stores/useStore';
import AnimatedSection from '../UI/AnimatedSection';

const TestimonialsSection: React.FC = () => {
  const { theme } = useStore();

  const testimonials = [
    {
      id: 1,
      name: 'Amira Ben Salem',
      role: 'Développeuse IoT',
      company: 'TechCorp',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'La formation IoT chez Maker Skills a transformé ma carrière. Les projets pratiques m\'ont permis de maîtriser rapidement les technologies.'
    },
    {
      id: 2,
      name: 'Karim Mansouri',
      role: 'Ingénieur Robotique',
      company: 'RoboTech',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Excellente approche pédagogique ! Les formateurs sont des experts qui savent transmettre leur passion pour la technologie.'
    },
    {
      id: 3,
      name: 'Leila Trabelsi',
      role: 'Data Scientist',
      company: 'AI Dynamics',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Le bootcamp IA était intense mais incroyablement enrichissant. J\'ai décroché mon emploi de rêve grâce aux compétences acquises.'
    }
  ];

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Ce que disent nos étudiants
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Découvrez les témoignages de nos anciens étudiants
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className={`p-8 rounded-2xl shadow-lg ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                } relative`}
              >
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-orange-500 opacity-50" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className={`text-lg mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {testimonial.role} chez {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;