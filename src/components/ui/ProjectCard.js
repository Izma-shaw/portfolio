import { projectsData } from "@/lib/resumeData";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Icon from "./Icon";

function ProjectCard() {
  return (
    <div className="my-10">
      <h2 className="shadow-md shadow-neutral-600/90 mb-2 title-green text-2xl text-center font-black py-4 sm:text-3xl rounded-md">
        Side Projects
      </h2>

      {/* Bullet info */}
      <ul className="text-sm text-gray-400 text-center mb-8 space-y-1">
        <li>• Icône ↗ : accès au repository GitHub</li>
      </ul>

      <div className="grid gap-8 md:grid-cols-2">
        {projectsData.map((item, id) => {
          return (
            <div
              key={id}
              className="shadow-md shadow-neutral-600/90 py-5 px-3 gap-2 rounded-2xl hover:scale-100 hover:shadow-sky-800 md:scale-95 transition-transform duration-1000"
            >
              {item.url && (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-max block rounded-full animate-pulse"
                  title="Accéder au projet sur GitHub"
                >
                  <Icon>
                    <FaExternalLinkAlt size={15} fill="black" />
                  </Icon>
                </Link>
              )}

              <h3 className="shadow-md shadow-inherit mt-5 mb-10 title-green text-sm text-center font-black p-2 sm:text-xl rounded-md">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base">
                {item.desciption}
              </p>

              <p className="mt-5 text-sm text-indigo-400 sm:text-base">
                Technologies: {item.technologies}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
