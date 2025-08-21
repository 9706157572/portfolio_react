

interface Skill {
  name: string;
  img: string;
  desc: string;
}

const skills: Skill[] = [
  {
    name: "HTML5",
    img: "https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png",
    desc: "Lorem Lorem Lorem",
  },
  {
    name: "CSS3",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg",
    desc: "Lorem Lorem Lorem",
  },
  {
    name: "JavaScript",
    img: "https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg",
    desc: "Lorem Lorem Lorem",
  },
  {
    name: "Node.js",
    img: "http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png",
    desc: "Lorem Lorem Lorem",
  },
  {
    name: "React",
    img: "https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png",
    desc: "Lorem Lorem Lorem",
  },
  {
    name: "Gatsby.js",
    img: "https://javascriptforwp.com/wp-content/uploads/2019/03/badge-gatsby.png",
    desc: "Lorem Lorem Lorem",
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-green-50 py-10">
      {/* Header */}
      <div className="text-center relative pb-6">
        <h1 className="text-3xl font-bold text-gray-800">Skills</h1>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-green-500 rounded"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 md:px-20 mt-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group p-4 text-center cursor-pointer transition-all duration-300"
          >
            <div className="flex flex-col items-center mb-3 relative">
              {/* Image Wrapper */}
              <div className="relative w-24 h-24 rounded-full bg-white flex justify-center items-center transition-transform duration-300 group-hover:-translate-x-3 overflow-hidden">
                <img src={skill.img} alt={skill.name} className="w-12 z-10" />
                <div className="absolute left-0 top-0 w-1/2 h-full bg-gray-500/40 rounded-l-full"></div>
              </div>

              {/* Decorative lines */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-green-500 rounded"></div>
              <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-6 h-1 bg-green-500 rounded transition-all duration-300 group-hover:w-8"></div>

              {/* Title */}
              <h3 className="mt-3 text-gray-800 font-semibold">{skill.name}</h3>
            </div>
            <p className="text-gray-700 text-sm">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;