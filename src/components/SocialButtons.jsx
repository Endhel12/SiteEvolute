import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Facebook } from 'lucide-react';

const SocialButtons = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/message/DH7W6OTF6UAOJ1',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/evoluteads?igsh=Nm5rcWVuaW10N2lh',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:from-pink-600 hover:to-purple-700'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/people/Evolute-Ads/61586026409877/?ref=pl_edit_xav_ig_profile_page_web#',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      name: 'Threads',
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 3.004C7.095 3.004 3.006 7.095 3.006 12.186S7.095 21.37 12.186 21.37s9.182-4.09 9.182-9.182-4.092-9.184-9.182-9.184zm4.472 6.645c-.274-.102-.568-.187-.88-.252.135-.546.204-1.108.204-1.674 0-2.267-1.368-4.176-3.322-4.872 1.814.55 3.127 2.228 3.127 4.227 0 .743-.183 1.442-.508 2.058l1.38.513zm-5.678 7.48c-2.165 0-3.914-1.75-3.914-3.914 0-2.165 1.75-3.914 3.914-3.914 2.165 0 3.914 1.75 3.914 3.914 0 2.165-1.75 3.914-3.914 3.914zm0-6.555c-1.456 0-2.64 1.184-2.64 2.64s1.184 2.64 2.64 2.64 2.64-1.184 2.64-2.64-1.184-2.64-2.64-2.64z"/>
        </svg>
      ),
      url: 'https://www.threads.com/@evoluteads?xmt=AQF0FKghLagFXoLIG80UfB5Eg3WKmPe5j3llE-BieDynV0E',
      color: 'from-gray-700 to-gray-800',
      hoverColor: 'hover:from-gray-800 hover:to-gray-900'
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-gradient-to-r ${social.color} ${social.hoverColor} p-4 rounded-full shadow-lg transition-all duration-300 group`}
            aria-label={social.name}
          >
            <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialButtons;