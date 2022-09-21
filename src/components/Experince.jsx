import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
  return (
    <div name="experience" className="w-full pt-14 bg-[#0a192f]">
      <div className="max-w-[1000px]">
        <div className="sm:text-right py-8 pl-4">
          <h1 className="text-4xl font-bold inline text-white border-b-4 border-[#ae4444]">
            Experience
          </h1>
        </div>
      </div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education text-white font-bold"
          date="2001 - 2005"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-black">
            Gymnasium, Cazin, Bosnia and Herzegowina
          </h3>
          <p className="text-black"> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education text-white font-bold"
          date="2007 - 2011"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-black">
            University of Sports Sciences, Banja Luka, Bosnia and Herzegowina
          </h3>

          <h4 className="vertical-timeline-element-subtitle text-black">
            Bachelor's degree
          </h4>

          <p className="text-black"> Sports Management</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-white font-bold"
          date="07/2021 - 04/2022"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-black">
            Junior Web Developer Freelance
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Cazin, Bosnia and Herzegowina
          </h4>
          <p className="text-black">
            Developed front end and back end infrastructure.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-white font-bold"
          date="04/2022 - present"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-black">
            Junior Full Stack Developer - Südblick
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Augsburg, Germany
          </h4>
          <p className="text-black">
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
