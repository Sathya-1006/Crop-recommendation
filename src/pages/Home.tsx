import React from 'react';
import { ChevronDown } from 'lucide-react';
import RecommendationForm from '../components/recommendation/RecommendationForm';

const Home: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('recommendation-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg')",
          }}
        />
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Grow the Right Crops for Your Land
            </h1>
            
            <p className="text-xl mb-8 text-green-100">
              Get personalized crop recommendations based on your soil, climate, and location. Make data-driven decisions for better yields.
            </p>
            
            <button 
              onClick={scrollToForm}
              className="bg-white text-green-700 font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-green-50 transition-all duration-300 flex items-center mx-auto"
            >
              Get Started
              <ChevronDown className="ml-2" size={20} />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path 
              fill="#f0fdf4" 
              fillOpacity="1" 
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Use CropAdvisor?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
              title="Data-Driven Recommendations" 
              description="Get crop suggestions based on scientific data about soil, climate, and growing conditions."
              iconClassName="bg-blue-100 text-blue-600"
              number="1"
            />
            
            <BenefitCard 
              title="Increase Your Yield" 
              description="Planting the right crops in the right conditions leads to healthier plants and better harvests."
              iconClassName="bg-green-100 text-green-600"
              number="2"
            />
            
            <BenefitCard 
              title="Save Time and Resources" 
              description="Avoid wasting resources on crops that aren't suited to your specific growing conditions."
              iconClassName="bg-amber-100 text-amber-600"
              number="3"
            />
          </div>
        </div>
      </section>
      
      {/* Form Section */}
      <section id="recommendation-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
            Find Your Ideal Crops
          </h2>
          
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Fill out the form below with information about your growing conditions to receive personalized crop recommendations.
          </p>
          
          <RecommendationForm />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Farmers Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="CropAdvisor helped me optimize my small urban garden. I'm growing vegetables I never thought possible in my climate!"
              author="Sarah J."
              location="Portland, OR"
            />
            
            <TestimonialCard 
              quote="As a new farmer, I was overwhelmed with choices. This tool gave me confidence in my crop selection and improved my first-year yields."
              author="Michael T."
              location="Austin, TX"
            />
            
            <TestimonialCard 
              quote="I've been farming for 20 years, but this tool still taught me new combinations of crops that work well in my region."
              author="Elena R."
              location="Raleigh, NC"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface BenefitCardProps {
  title: string;
  description: string;
  iconClassName: string;
  number: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, iconClassName, number }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      <div className={`w-12 h-12 rounded-full ${iconClassName} flex items-center justify-center mb-4`}>
        <span className="font-bold text-lg">{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, location }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4 text-green-600">
        <svg width="32\" height="32\" viewBox="0 0 32 32\" fill="none\" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.667 13.333H5.33366C5.33366 8 9.33366 5.333 13.3337 5.333L12.0003 8C10.667 8.667 10.667 10.667 10.667 13.333ZM21.3337 13.333H16.0003C16.0003 8 20.0003 5.333 24.0003 5.333L22.667 8C21.3337 8.667 21.3337 10.667 21.3337 13.333Z\" fill="currentColor"/>
          <path d="M5.33366 14.667H10.667V20.0003C10.667 20.8843 10.3161 21.7323 9.69097 22.3574C9.06584 22.9826 8.21797 23.3337 7.33399 23.3337C6.45001 23.3337 5.60214 22.9826 4.97702 22.3574C4.35189 21.7323 4.00033 20.8843 4.00033 20.0003V16.0003C4.00033 15.6467 4.14081 15.3073 4.39086 15.0572C4.64091 14.8072 4.98027 14.667 5.33366 14.667ZM16.0003 14.667H21.3337V20.0003C21.3337 20.8843 20.9821 21.7323 20.357 22.3574C19.7319 22.9826 18.884 23.3337 18.0003 23.3337C17.1163 23.3337 16.2685 22.9826 15.6433 22.3574C15.0182 21.7323 14.667 20.8843 14.667 20.0003V16.0003C14.667 15.6467 14.8075 15.3073 15.0575 15.0572C15.3076 14.8072 15.6469 14.667 16.0003 14.667Z\" fill="currentColor"/>
        </svg>
      </div>
      
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      
      <div>
        <p className="font-semibold text-gray-800">{author}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

export default Home;