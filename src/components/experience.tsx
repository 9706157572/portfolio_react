
import { Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <div className="max-w-9xl mx-auto bg-green-50 shadow-lg ">
      {/* Header */}
      <div className="text-center relative py-6">
        <h1 className="text-3xl font-bold text-gray-800">Experience</h1>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-green-500 rounded"></div>
      </div>


      <div className="flex md:flex-row flex-col">
        {/* Left Column */}
        <div className="flex-1 bg-green-50 px-6 py-8">
          {/* Profile Summary */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-2">
              Profile
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Experienced professional with a strong background in web development 
              and design. Passionate about creating user-friendly digital experiences 
              and solving complex problems through innovative solutions.
            </p>
          </div>
          
        </div>

        {/* Right Column */}
        <div className="flex-2 bg-yellow-50 px-8 py-8">
          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-green-800 pb-2">
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-green-800 pl-6 relative">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-green-800 rounded-full"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">Coordinator-Entrepreneurship Development Cell</h3>
                    <p className="text-green-800 font-medium">Assam Science and Technology University (ASTU) </p>
                  </div>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    2022 - Present
                  </span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Designed and executed innovation-driven programs including hackathons, workshops, and startup bootcamps.</li>
                  <li>Mentored over 50 student-led startup ideas from ideation to execution.</li>
                  <li>Established partnerships with multiple incubation centers and funding agencies.</li>
                  <li>Streamlined communication between university, government bodies, and industry stakeholders.</li>
                  <li>Developed resource guides for budding entrepreneurs covering funding, legal compliance, and scaling strategies.</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-800 pl-6 relative">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-green-800 rounded-full"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">IT Executive-Guwahati Water Supply Project (JICA)</h3>
                    <p className="text-green-800 font-medium">NJS Engineers India Pvt. Ltd. </p>
                  </div>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    2015 - 2020
                  </span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Managed complete content lifecycle of the project’s official website.</li>
                  <li>Led implementation of an online grievance management system, reducing resolution time by 30%.</li>
                  <li>Coordinated with multi-disciplinary teams for technical troubleshooting and issue tracking.</li>
                  <li>Created analytics dashboards and monthly reports for management review.</li>
                  <li>Developed training modules for municipal staff on using the grievance portal effectively.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;