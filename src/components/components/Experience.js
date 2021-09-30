import React from 'react';
import TodayIcon from '@material-ui/icons/Today';

const Experience = ({ data, color }) => {
  const experience = data.experience;
  return (
    <div className='experience'>
      <p className='heading' style={{ color: `${color.primary}` }}>
        Experience
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      {experience.map((item, index) => (
        <div key={index} className='row-table'>
          <div className='left-column'>
            {item.year && (
              <p className='year'>
                <TodayIcon  style={{ height:'15px' }}/>
                {item.year}
              </p>
            )}
          </div>
          <div className='right-column'>
            <p className='position'>{item.position}</p>
            <p className='company'>{item.company}</p>
            <p className='description'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
