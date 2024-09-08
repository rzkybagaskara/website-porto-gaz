import './components/Intro';
import Intro from './components/Intro';
import './components/TechnicalSkills';
import TechnicalSkills from './components/TechnicalSkills';
import './components/workExperience';
import WorkExperience from './components/workExperience';

export default function Home() {
  return (
    <div>
      <Intro />
      <TechnicalSkills />
      <WorkExperience />
    </div>
  );
}
