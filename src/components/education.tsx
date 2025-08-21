import { Calendar,GraduationCap, MapPin } from 'lucide-react';

// Define proper TypeScript interfaces
interface EducationItem {
  type: 'education';
  period: string;
  title: string;
  institution: string;
  description: string;
  location: string;
}


const EducationSection = () => {
  const educationData: EducationItem[] = [
    {
      type: 'education',
      period: '2008',
      title: 'HSLC',
      institution: 'Saint Marys English High School',
      description: 'Focused on frontend technologies, user interface design, and responsive web development. Completed capstone project building e-commerce platform.',
      location: 'Guwahati Club'
    },
    {
      type: 'education',
      period: '2010',
      title: 'HS',
      institution: 'Gurukul Grammar Senior Secondary School',
      description: 'Focused on frontend technologies, user interface design, and responsive web development. Completed capstone project building e-commerce platform.',
      location: 'Geetanagar'
    },
    {
      type: 'education',
      period: '2014',
      title: 'Graduation',
      institution: 'Donbosco Engineering College',
      description: 'B.Tech-Computer Science & Engineering , Focused on frontend technologies, user interface design, and responsive web development. Completed capstone project building e-commerce platform.',
      location: 'Azara'
    },
    {
      type: 'education',
      period: '2024',
      title: 'Post Graduation',
      institution: 'Krishna Kanta Handiqui State Open University',
      description: 'MBA-Marketing , Focused on frontend technologies, user interface design, and responsive web development. Completed capstone project building e-commerce platform.',
      location: 'Khanapara'
    }
  ];

  

  const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => (
    <div className="bg-yellow-50 border-2 border-green-600 rounded-lg p-6 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20">
      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
        <Calendar className="w-4 h-4" />
        <span>{item.period}</span>
      </div>
      
      <h3 className="text-green-600 text-xl font-bold mb-2">
        {item.title}
      </h3>
      
      <div className="flex items-center gap-2 text-gray-700 text-lg font-semibold mb-4">
        <GraduationCap className="w-5 h-5 text-green-600" />
        <span>{item.institution}</span>
      </div>
      
      <div className="flex items-start gap-3 mb-4">
        <div className="w-1 h-16 bg-green-600 rounded-full mt-1 flex-shrink-0"></div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      {item.location && (
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{item.location}</span>
        </div>
      )}
    </div>
  );


  return (
    <div className="bg-green-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-center font-bold text-gray-800 mb-6">
            Education
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through formal education and industry-recognized certifications. 
            Building expertise in modern technologies and best practices.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">Education</h2>
            <div className="flex-1 h-0.5 bg-green-600 ml-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {educationData.map((item, index) => (
              <EducationCard key={index} item={item} />
            ))}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default EducationSection;