import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloudSun, Droplets, Map, Calendar, Search } from 'lucide-react';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';
import { getRecommendations } from '../../utils/recommendationEngine';

interface FormData {
  location: string;
  soilType: string;
  climate: string;
  season: string;
}

const RecommendationForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    location: '',
    soilType: 'loam',
    climate: 'temperate',
    season: 'spring'
  });
  
  const soilOptions = [
    { value: 'clay', label: 'Clay' },
    { value: 'sandy', label: 'Sandy' },
    { value: 'loam', label: 'Loam' },
    { value: 'silt', label: 'Silt' },
    { value: 'peaty', label: 'Peaty' },
    { value: 'chalky', label: 'Chalky' }
  ];
  
  const climateOptions = [
    { value: 'tropical', label: 'Tropical' },
    { value: 'dry', label: 'Dry' },
    { value: 'temperate', label: 'Temperate' },
    { value: 'continental', label: 'Continental' },
    { value: 'polar', label: 'Polar' }
  ];
  
  const seasonOptions = [
    { value: 'spring', label: 'Spring' },
    { value: 'summer', label: 'Summer' },
    { value: 'fall', label: 'Fall' },
    { value: 'winter', label: 'Winter' }
  ];
  
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const recommendations = getRecommendations(formData);
      localStorage.setItem('cropRecommendations', JSON.stringify(recommendations));
      localStorage.setItem('cropFormData', JSON.stringify(formData));
      setIsLoading(false);
      navigate('/results');
    }, 1500);
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Your Ideal Crops</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              label="Location"
              placeholder="Enter your location"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              icon={<Map size={18} className="text-gray-500" />}
              fullWidth
              helperText="Enter your city or region for more accurate results"
            />
            
            <Select
              label="Soil Type"
              options={soilOptions}
              value={formData.soilType}
              onChange={(value) => handleChange('soilType', value)}
              fullWidth
              helperText="Different crops thrive in different soil types"
            />
            
            <Select
              label="Climate"
              options={climateOptions}
              value={formData.climate}
              onChange={(value) => handleChange('climate', value)}
              fullWidth
              icon={<CloudSun size={18} className="text-gray-500" />}
            />
            
            <Select
              label="Growing Season"
              options={seasonOptions}
              value={formData.season}
              onChange={(value) => handleChange('season', value)}
              fullWidth
              icon={<Calendar size={18} className="text-gray-500" />}
            />
          </div>
          
          <div className="mt-8">
            <Button 
              type="submit" 
              fullWidth
              disabled={isLoading}
              icon={<Search size={18} />}
            >
              {isLoading ? 'Finding Crops...' : 'Get Recommendations'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecommendationForm;