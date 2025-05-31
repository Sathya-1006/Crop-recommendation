import React from 'react';
import { Leaf, BarChart, Lightbulb, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About CropAdvisor</h1>
          <p className="text-xl text-gray-600">
            Helping farmers and gardeners make data-driven decisions for sustainable agriculture.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              At CropAdvisor, we believe that sustainable agriculture starts with planting the right crops in the right conditions. Our mission is to provide farmers and gardeners of all sizes with accessible, data-driven recommendations that increase yields while minimizing resource waste.
            </p>
            <p className="text-gray-700">
              By combining agricultural science with modern technology, we aim to democratize access to crop planning expertise and contribute to more sustainable farming practices worldwide.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Data Collection</h3>
              </div>
              <p className="text-gray-700">
                We gather data about soil types, climate conditions, and crop requirements from agricultural research institutions and universities around the world.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Smart Analysis</h3>
              </div>
              <p className="text-gray-700">
                Our recommendation engine analyzes the compatibility between your specific growing conditions and hundreds of crop varieties to find the best matches.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Leaf className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Sustainable Focus</h3>
              </div>
              <p className="text-gray-700">
                We prioritize recommendations that promote sustainable farming practices, including crop rotations, water conservation, and natural pest management.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Local Adaptation</h3>
              </div>
              <p className="text-gray-700">
                Our recommendations are tailored to your specific location and conditions, taking into account regional climate patterns and local growing seasons.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              CropAdvisor was founded by a diverse team of agricultural scientists, software engineers, and farmers who share a passion for sustainable agriculture and technology.
            </p>
            <p className="text-gray-700">
              Our team continues to expand our crop database, refine our recommendation algorithms, and add new features to help farmers make the most of their land.
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <p className="text-gray-700 mb-2">
              Email: <a href="mailto:contact@cropadvisor.com" className="text-green-600 hover:underline">contact@cropadvisor.com</a>
            </p>
            <p className="text-gray-700">
              Follow us on social media for tips, updates, and sustainable farming inspiration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;