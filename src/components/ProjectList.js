import projectsData from '../data/projects.json';

const projectList = () => {
  return (
    <div class="grid lg:grid-cols-3 md:grid-cols-1 mr-10 mt-20 ml-10 gap-20" data-aos="fade-up" data-aos-duration="800">
      {projectsData.map((project) => (
        <div className="max-w-sm border border-white-800 rounded shadow mx-auto">
          <div className="p-4" key={project.project_key}>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h2>
            <img className="rounded-t-lg w-full" src={project.image} alt={project.title} />
            <p className="pt-3 mb-3 font-normal text-white dark:text-gray-400">{project.description}</p>
            <a
              href={project.project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Project
            </a>
            <a
              href={project.easy_report}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center ml-4 px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Report
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default projectList;
