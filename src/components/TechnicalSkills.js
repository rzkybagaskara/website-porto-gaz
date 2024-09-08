const technicalSkills = () => {
  return (
    <div className="mt-80">
      {/* Header */}
      <div className="header-skills" data-aos="zoom-in" data-aos-duration="800">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">Technical Skills</h2>
      </div>

      {/* Technical Skill Icons */}
      <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-5 mx-auto" data-aos="fade-up" data-aos-duration="800">
        <ul className="flex flex-wrap justify-center items-center gap-10">
          <li className="duration-300 hover:scale-110">
            <img src="/Power-BI.svg" alt="power bi" class="w-20 h-12" />
            <p className="text-xl text-white text-center pt-2 ">Power BI</p>
          </li>

          <li className="duration-300 hover:scale-110">
            <img src="/tableau.svg" alt="tableau" class="w-20 h-12" />
            <p className="text-xl text-white text-center pt-2">Tableau</p>
          </li>

          <li className="duration-300 hover:scale-110">
            <img src="/sql.svg" alt="SQL" class="w-20 h-12" />
            <p className="text-xl text-white text-center pt-2">SQL</p>
          </li>

          <li className="duration-300 hover:scale-110">
            <img src="/python.svg" alt="python" class="w-20 h-12" />
            <p className="text-xl text-white text-center pt-2">Python</p>
          </li>

          <li className="duration-300 hover:scale-110">
            <img src="/git.svg" alt="git" class="w-20 h-12" />
            <p className="text-xl text-white text-center pt-2">Git</p>
          </li>

          <li className="duration-300 hover:scale-110">
            <img src="/figma.svg" alt="figma" class="w-20 h-12" />
            <p className="text-xl text-white text-center pt-2">Figma</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default technicalSkills;
