import { motion } from "framer-motion";

const ExperienceLists = ({ title, description, jobDate, company }) => {
  const experienceVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  return (
    <motion.div
      className="mx-auto flex flex-col items-start justify-between"
      variants={experienceVariant}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
    >
      <h3 className="capitalize font-bold sm:text-2xl">
        {title}
        {" @ "}
        {company}
      </h3>
      <p className="p-3 text-dark/75 text-sm font-medium">{jobDate}</p>
      <p className="p-3 text-medium italic">{description}</p>
    </motion.div>
  );
};

export default ExperienceLists;
