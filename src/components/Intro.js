import { FaGithub } from 'react-icons/fa';
import { FaFilePdf, FaLinkedin } from 'react-icons/fa6';
import { IoLogoTableau } from 'react-icons/io5';

const introComponent = () => {
  return (
    <div className="mt-20 ml-10 flex flex-row">
      {/* Introduction Text */}
      <div className="mr-4 mt-20" data-aos="fade-right" data-aos-duration="800">
        <h1 className="text-5xl font-bold text-white mb-10">Rizky Bagaskara</h1>

        {/* Social Icons */}
        <div className="flex gap-5 mb-5">
          <a href="https://www.linkedin.com/in/rizky-bagaskara" target="_blank">
            <FaLinkedin size={30} color="white" className="hover:bg-emerald-700 duration-300 hover:scale-110" />
          </a>
          <a href="https://github.com/rzkybagaskara/" target="_blank">
            <FaGithub size={30} color="white" className="hover:bg-emerald-700 duration-300 hover:scale-110" />
          </a>
          <a href="https://drive.google.com/file/d/1GLNXWRIMpSQ1fJVq3COEJ_dYOnmHYzEi/view" target="_blank">
            <FaFilePdf size={30} color="white" className="hover:bg-emerald-700 duration-300 hover:scale-110" />
          </a>
          <a href="https://public.tableau.com/app/profile/rizky.bagaskara/vizzes" target="_blank">
            <IoLogoTableau size={30} color="white" className="hover:bg-emerald-700 duration-300 hover:scale-110" />
          </a>
        </div>

        <p className="text-2xl text-white">I'm a Fresh Graduate Informatics Major from Gunadarma University, with over a year of experience </p>
        <p className="text-2xl text-white">in the Data Analytics field.</p>
        <br></br>
        <p className="text-2xl text-white">I'm familiar with BI Tools (Power BI and Tableau), RDBMS (SQL), and Python.</p>
      </div>

      {/* Hero Image */}
      <div className="max-sm:hidden h-auto max-w-md ms-auto mr-20" data-aos="fade-left" data-aos-duration="800">
        <img src="/Hero_resized.jpg" alt="hero image" class="mx-auto md:h-128 md:w-128 w-full max-w-lg object-cover rounded-3xl" />
      </div>
    </div>
  );
};

export default introComponent;
