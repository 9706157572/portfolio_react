import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Monitor,
  Smartphone,
  Sparkles,
} from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Monitor,
      title: "Website Design",
      projects: "76 Projects",
      color: "bg-emerald-600",
      iconColor: "text-white",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      projects: "63 Projects",
      color: "bg-amber-500",
      iconColor: "text-white",
    },
    {
      icon: Sparkles,
      title: "Brand Identity",
      projects: "47 Projects",
      color: "bg-orange-500",
      iconColor: "text-white",
    },
  ];

  return (
    <div className="bg-green-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Services */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-6">
                <div
                  className={`w-20 h-20 ${service.color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{service.projects}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                About Me
              </h2>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <a href="mailto:neelanjanachoudhury1@gmail.com" className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>email@example.com</span>
                </a>
                <a  href="tel:+919706157572" className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </a >
                <a  href="mailto:neelanjanachoudhury1@gmail.com" className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>City, State</span>
                </a >
                <a  href="mailto:neelanjanachoudhury1@gmail.com" className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  <span>portfolio.com</span>
                </a >
              </div>
              <br />

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Dynamic professional with a B.Tech in Computer Science
                  Engineering and an MBA in Marketing, combining deep technical
                  knowledge with strategic business insight. Adept at leading IT
                  projects, managing digital platforms, and fostering
                  entrepreneurial ecosystems. Seeking to leverage expertise in
                  technology, innovation, and leadership to contribute to
                  impactful projects and organizational growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
