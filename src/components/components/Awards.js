import React from "react";

const Awards = ({ data, color }) => {
  const awards = data.awards;
  return (
    <div className="projects">
      <p className="heading" style={{ color: `${color.primary}` }}>
        Achievements
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      {awards.map((item, index) => (
        <ul key={index} className="row-table">
          <li>
            <span className="description">{item.title}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Awards;
