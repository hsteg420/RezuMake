import React from 'react';
import TodayIcon from "@material-ui/icons/Today";


const Certifications = ({ data, color }) => {
  const certifications = data.certifications;
  return (
    <div className='certifications'>
      <p className='heading' style={{ color: `${color.primary}` }}>
        Certifications
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      {certifications.map((item, index) => (
        <div key={index} className='row-table'>
          <div className='left-column'>
            {item.year && (
              <p className='year'>
                <TodayIcon style={{ height: "15px" }} />
                {item.year}
              </p>
            )}
           
          </div>
          <div className='right-column'>
            <p className='course'>{item.course}</p>
            <p className='institution'>{item.institution}</p>
            <p className='description'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
