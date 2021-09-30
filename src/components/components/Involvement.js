import React from 'react';

const Involvement = ({ data, color }) => {
  const Involvement = data.Involvement;

  return (
    <div className='involvement'>
      <p className='heading' style={{ color: `${color.primary}` }}>
        Involvement
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      {Involvement.map((item, index) => (
        <div key={index} className='involvement-item'>
          {item.name && (
            <div className='item'>
              <p className='text rname'>{item.name}</p>
            </div>
          )}
          {item.desig && (
            <div className='item'>
              <p className='text desig'>{item.desig}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Involvement;
