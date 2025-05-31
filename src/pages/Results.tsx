import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter, SlidersHorizontal } from 'lucide-react';
import CropCard from '../components/recommendation/CropCard';
import Button from '../components/common/Button';
import Select from '../components/common/Select';
import { Crop } from '../types';

const Results: React.FC = () => {
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState<Crop[]>([]);
  const [filteredRecommendations, setFilteredRecommendations] = useState<Crop[]>([]);
  const [formData, setFormData] = useState<any>(null);
  const [filters, setFilters] = useState({
    waterNeeds: 'all',
    sunlight: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    const storedRecommendations = localStorage.getItem('cropRecommendations');
    const storedFormData = localStorage.getItem('cropFormData');
    
    if (!storedRecommendations || !storedFormData) {
      navigate('/');
      return;
    }
    
    try {
      const parsedRecommendations = JSON.parse(storedRecommendations);
      const parsedFormData = JSON.parse(storedFormData);
      
      setRecommendations(parsedRecommendations);
      setFilteredRecommendations(parsedRecommendations);
      setFormData(parsedFormData);
    } catch (error) {
      console.error('Error parsing stored data:', error);
      navigate('/');
    }
  }, [navigate]);
  
  useEffect(() => {
    if (!recommendations.length) return;
    
    let filtered = [...recommendations];
    
    if (filters.waterNeeds !== 'all') {
      filtered = filtered.filter(crop => crop.waterNeeds === filters.waterNeeds);
    }
    
    if (filters.sunlight !== 'all') {
      filtered = filtered.filter(crop => crop.sunlight === filters.sunlight);
    }
    
    setFilteredRecommendations(filtered);
  }, [filters, recommendations]);
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  const handleFilterChange = (filterName: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };
  
  const clearFilters = () => {
    setFilters({
      waterNeeds: 'all',
      sunlight: 'all'
    });
  };
  
  if (!formData) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p>Loading recommendations...</p>
      </div>
    );
  }
  
  const waterOptions = [
    { value: 'all', label: 'All Water Needs' },
    { value: 'Low', label: 'Low Water' },
    { value: 'Medium', label: 'Medium Water' },
    { value: 'High', label: 'High Water' }
  ];
  
  const sunOptions = [
    { value: 'all', label: 'All Sunlight Needs' },
    { value: 'Full Sun', label: 'Full Sun' },
    { value: 'Partial Sun', label: 'Partial Sun' },
    { value: 'Shade', label: 'Shade' }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button 
          variant="outline" 
          size="sm" 
          icon={<ArrowLeft size={16} />}
          onClick={() => navigate('/')}
        >
          Back to Form
        </Button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Crop Recommendations</h1>
        
        <div className="text-gray-600">
          <p className="mb-2">
            <span className="font-medium">Location:</span> {formData.location || 'Not specified'}
          </p>
          <p className="mb-2">
            <span className="font-medium">Soil Type:</span> {formData.soilType}
          </p>
          <p className="mb-2">
            <span className="font-medium">Climate:</span> {formData.climate}
          </p>
          <p>
            <span className="font-medium">Season:</span> {formData.season}
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Recommended Crops ({filteredRecommendations.length})
          </h2>
          
          <Button 
            variant="outline"
            size="sm"
            icon={<SlidersHorizontal size={16} />}
            onClick={toggleFilters}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        
        {showFilters && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-6 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-end gap-4">
              <div className="flex-1">
                <Select
                  label="Water Needs"
                  options={waterOptions}
                  value={filters.waterNeeds}
                  onChange={(value) => handleFilterChange('waterNeeds', value)}
                  fullWidth
                />
              </div>
              
              <div className="flex-1">
                <Select
                  label="Sunlight"
                  options={sunOptions}
                  value={filters.sunlight}
                  onChange={(value) => handleFilterChange('sunlight', value)}
                  fullWidth
                />
              </div>
              
              <div className="md:mb-4">
                <Button 
                  variant="text"
                  onClick={clearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {filteredRecommendations.length === 0 ? (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800">
              No crops match your current filters. Try adjusting the filters or 
              <button 
                onClick={clearFilters}
                className="text-amber-600 font-medium ml-1 underline hover:text-amber-700"
              >
                clear all filters
              </button>.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecommendations.map((crop) => (
              <CropCard key={crop.id} crop={crop} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;