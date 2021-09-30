import React from 'react';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Awards from './components/Awards';

const RightContent = ({ data, color }) => {
  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='right-content'>
      {check(data.Summary) && <Summary data={data} color={color} />}
      {check(data.education) && <Education data={data} color={color} />}
      {check(data.experience) && <Experience data={data} color={color} />}
      {check(data.certifications) && <Certifications data={data} color={color} />}
      {check(data.projects) && <Projects data={data} color={color} />}
      {check(data.awards) && <Awards data={data} color={color} />}
    </div>
  );
};

export default RightContent;
