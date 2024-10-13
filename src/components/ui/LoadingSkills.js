import { FaPython, FaNodeJs, FaBrain } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiMongodb } from "react-icons/si";
import { MdDataUsage } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";

function LoadingSkills() {
  const skillsData = [
    { name: "Python", icon: <FaPython className="w-10 h-10 text-yellow-400" /> },
    { name: "Node JS", icon: <FaNodeJs className="w-10 h-10 text-green-500" /> },
    { name: "Deep Learning", icon: <FaBrain className="w-10 h-10 text-purple-500" /> },
    { name: "Machine Learning", icon: <SiTensorflow className="w-10 h-10 text-orange-400" /> },
    { name: "Data Science", icon: <MdDataUsage className="w-10 h-10 text-blue-500" /> },
    { name: "Data Analysis", icon: <SiPytorch className="w-10 h-10 text-red-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-green-600" /> },
  ];

  return (
    <div id="skills" className="my-10 shadow-md shadow-neutral-700 py-10 px-2">
      <h2 className="shadow-md shadow-neutral-700 mb-10 title-green text-2xl text-center font-black mx-2 p-4 sm:text-3xl">
        Compétences
      </h2>
      <div className="w-full my-12 flex flex-wrap justify-center gap-5">
        {skillsData.map((skill, id) => (
          <div
            className="w-36 h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group hover:scale-[1.15] cursor-pointer"
            key={id}
          >
            <div className="flex flex-col items-center justify-center gap-3 p-6 border border-neutral-700 shadow-sm shadow-neutral-500 group-hover:border-sky-500 transition-all duration-700 overflow-x-hidden">
              {skill.icon}
              <p className="text-white text-sm sm:text-lg">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingSkills;
