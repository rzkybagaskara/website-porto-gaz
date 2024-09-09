import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

const experienceTimeline = () => {
  return (
    <div className="experience mt-40 font-inter">
      <div className="header-skills" data-aos="zoom-in" data-aos-duration="800">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">Work Experience</h2>
      </div>

      <div className="timeline pb-20" data-aos="fade-up" data-aos-duration="800">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="timeline-1 text-xl text-white">
                <p className="font-bold">PT Darya Varia Laboratoria Tbk</p>
                <p>Data Analyst Intern (March - July 2024) </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="timeline-1 text-xl text-white">
                <p className="font-bold">Gunadarma I/O</p>
                <p>Academic Core Team (Sept 2023 - Sept 2024) </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="timeline-1 text-xl text-white">
                <p className="font-bold">MariBelajar (MSIB)</p>
                <p>Data Analyst Mentee (Feb 2023 - June 2023) </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <div class="timeline-1 text-xl text-white">
                <p className="font-bold">LepKom Aplikasi</p>
                <p>Computer Lab Assistant (Aug 2022 - Aug 2024) </p>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default experienceTimeline;
