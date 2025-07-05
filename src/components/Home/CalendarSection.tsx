import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { useStore } from '../../stores/useStore';
import AnimatedSection from '../UI/AnimatedSection';

const CalendarSection: React.FC = () => {
  const { theme } = useStore();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Formation IoT Débutant',
      type: 'formation',
      date: '2024-04-15',
      time: '09:00',
      duration: '8 semaines',
      location: 'Campus Maker Skills',
      participants: 25,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 299
    },
    {
      id: 2,
      title: 'Bootcamp IA Intensive',
      type: 'bootcamp',
      date: '2024-04-18',
      time: '09:00',
      duration: '16 semaines',
      location: 'Campus + En ligne',
      participants: 20,
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 4999
    },
    {
      id: 3,
      title: 'Workshop Arduino',
      type: 'workshop',
      date: '2024-04-20',
      time: '14:00',
      duration: '3 heures',
      location: 'Lab Électronique',
      participants: 15,
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 45
    },
    {
      id: 4,
      title: 'Conférence Robotique',
      type: 'event',
      date: '2024-04-25',
      time: '16:00',
      duration: '2 heures',
      location: 'Auditorium',
      participants: 100,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 0
    },
    {
      id: 5,
      title: 'Formation Robotique Avancée',
      type: 'formation',
      date: '2024-04-28',
      time: '10:00',
      duration: '12 semaines',
      location: 'Lab Robotique',
      participants: 18,
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 599
    },
    {
      id: 6,
      title: 'Workshop Impression 3D',
      type: 'workshop',
      date: '2024-05-02',
      time: '13:00',
      duration: '4 heures',
      location: 'FabLab',
      participants: 12,
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: 60
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous', color: 'bg-gray-500' },
    { id: 'formation', label: 'Formations', color: 'bg-blue-600' },
    { id: 'bootcamp', label: 'Bootcamps', color: 'bg-orange-500' },
    { id: 'workshop', label: 'Workshops', color: 'bg-blue-500' },
    { id: 'event', label: 'Événements', color: 'bg-orange-600' }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'formation': return 'bg-blue-600';
      case 'bootcamp': return 'bg-orange-500';
      case 'workshop': return 'bg-blue-500';
      case 'event': return 'bg-orange-600';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'formation': return 'Formation';
      case 'bootcamp': return 'Bootcamp';
      case 'workshop': return 'Workshop';
      case 'event': return 'Événement';
      default: return type;
    }
  };

  const filteredEvents = selectedFilter === 'all' 
    ? events 
    : events.filter(event => event.type === selectedFilter);

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Calendrier des Événements
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Découvrez nos prochaines formations, bootcamps et workshops
            </p>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? `${filter.color} text-white shadow-lg`
                    : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Filter className="h-4 w-4" />
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Calendar Header */}
        <AnimatedSection>
          <div className={`flex items-center justify-between p-6 rounded-t-2xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <button
              onClick={prevMonth}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <h3 className={`text-xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
            </h3>
            
            <button
              onClick={nextMonth}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </AnimatedSection>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <AnimatedSection key={event.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } group cursor-pointer`}
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getTypeColor(event.type)}`}>
                      {getTypeLabel(event.type)}
                    </span>
                  </div>
                  {event.price === 0 && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Gratuit
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className={`text-lg font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {new Date(event.date).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {event.time} - {event.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-green-500" />
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {event.location}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-purple-500" />
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {event.participants} participants max
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {event.price === 0 ? 'Gratuit' : `${event.price}€`}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 ${getTypeColor(event.type)} text-white rounded-lg font-medium hover:opacity-90 transition-opacity`}
                    >
                      S'inscrire
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Button */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
            >
              Voir tous les événements
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CalendarSection;