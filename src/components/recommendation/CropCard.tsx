import React, { useState } from 'react';
import { Crop } from '../../types';
import { Sun, Droplets, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface CropCardProps {
  crop: Crop;
}

const CropCard: React.FC<CropCardProps> = ({ crop }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative">
        <img 
          src={crop.imageUrl} 
          alt={crop.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{crop.name}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <div className="flex items-center text-gray-600">
              <Sun size={16} className="mr-1 text-amber-500" />
              <span className="text-sm">{crop.sunlight}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Droplets size={16} className="mr-1 text-blue-500" />
              <span className="text-sm">{crop.waterNeeds}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-1 text-green-500" />
              <span className="text-sm">{crop.growthDuration}</span>
            </div>
          </div>
          
          <button 
            onClick={toggleExpanded}
            className="text-green-600 hover:text-green-700 focus:outline-none"
            aria-label={expanded ? "Show less" : "Show more"}
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <p className="text-gray-600 mb-3">{crop.description}</p>
        
        {expanded && (
          <div className="mt-4 space-y-4 text-gray-700 animate-fadeIn">
            <div>
              <h4 className="font-semibold mb-1">Planting Tips</h4>
              <p className="text-sm">{crop.plantingTips}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-1">Soil Requirements</h4>
              <p className="text-sm">{crop.soilRequirements}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-1">Harvesting</h4>
              <p className="text-sm">{crop.harvestInformation}</p>
            </div>
            
            <div className="pt-2">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2 mb-2">
                {crop.climate}
              </span>
              <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded mr-2 mb-2">
                {crop.season}
              </span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-2">
                {crop.soilType}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropCard;