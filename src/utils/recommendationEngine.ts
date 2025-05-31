import { Crop } from '../types';
import { cropData } from '../data/cropData';

interface RecommendationParams {
  location?: string;
  soilType: string;
  climate: string;
  season: string;
}

export const getRecommendations = (params: RecommendationParams): Crop[] => {
  let recommendations: Crop[] = [];
  
  // Step 1: Filter by climate
  let climateFiltered = cropData.filter(crop => 
    crop.climate === params.climate || crop.climate === 'any'
  );
  
  // Step 2: Filter by season
  let seasonFiltered = climateFiltered.filter(crop => 
    crop.season === params.season || crop.season === 'any'
  );
  
  // Step 3: Filter by soil type
  let soilFiltered = seasonFiltered.filter(crop => 
    crop.soilType === params.soilType || crop.soilType === 'any'
  );
  
  // If we have too few results, relax the soil constraint
  if (soilFiltered.length < 3) {
    soilFiltered = seasonFiltered;
  }
  
  // If we still have too few results, relax the season constraint
  if (soilFiltered.length < 3) {
    soilFiltered = climateFiltered;
  }
  
  // If we still have too few results, just return some crops
  if (soilFiltered.length < 3) {
    return cropData.slice(0, 6);
  }
  
  // Sort by suitability score (a hypothetical calculation)
  recommendations = soilFiltered.sort((a, b) => {
    let scoreA = calculateSuitabilityScore(a, params);
    let scoreB = calculateSuitabilityScore(b, params);
    return scoreB - scoreA;
  });
  
  // Return top recommendations (limited to 9 max)
  return recommendations.slice(0, 9);
};

// Calculate a suitability score based on how well the crop matches the parameters
const calculateSuitabilityScore = (crop: Crop, params: RecommendationParams): number => {
  let score = 0;
  
  // Exact climate match is worth more points
  if (crop.climate === params.climate) {
    score += 3;
  } else if (crop.climate === 'any') {
    score += 1;
  }
  
  // Exact season match is worth points
  if (crop.season === params.season) {
    score += 3;
  } else if (crop.season === 'any') {
    score += 1;
  }
  
  // Exact soil match is worth points
  if (crop.soilType === params.soilType) {
    score += 3;
  } else if (crop.soilType === 'any') {
    score += 1;
  }
  
  return score;
};