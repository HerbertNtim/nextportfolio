import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  image,
  title,
  description,
  demoLink,
  github,
  techStack,
}) => {
  return (
    <article className="w-[90%] xs:w-full sm:w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between rounded-3xl border border-gray-300 shadow-xl bg-white p-8 relative hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Decorative border */}
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-gradient-to-r from-purple-400 to-blue-500 opacity-25" />

      {/* Project image */}
      <Link href={demoLink} className="flex-shrink-0">
        <Image
          src={image || "/bg.png"}
          alt={title}
          className="rounded-xl object-contain"
          width={250}
          height={250}
        />
      </Link>

      {/* Project details */}
      <div className="sm:w-2/3 flex flex-col items-start justify-center pl-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {techStack.map((stack, index) => (
            <span className="text-sm font-medium text-gray-800 p-2 rounded bg-slate-200"  key={index}>
              {stack}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Links */}
        <div className="mt-4 flex items-center space-x-4">
          <Link href={github} className="text-blue-500 hover:underline text-lg">
            Github
          </Link>
          <Link
            href={demoLink}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Demo
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
