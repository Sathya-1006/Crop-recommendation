import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Github, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-6 w-6" />
              <span className="text-xl font-bold">CropAdvisor</span>
            </div>
            <p className="text-green-100 mb-4">
              Helping farmers and gardeners make informed decisions about crop selection based on local conditions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-green-100 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:contact@cropadvisor.com" className="text-green-100 hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-green-100 hover:text-white transition-colors">About</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">Crop Database</a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">Seasonal Guide</a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors">Soil Types</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-100 text-sm mb-4 md:mb-0">
            &copy; {currentYear} CropAdvisor. All rights reserved.
          </p>
          <p className="text-green-100 text-sm flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-400" /> for sustainable farming
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;