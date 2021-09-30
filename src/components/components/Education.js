import React from "react";
import TodayIcon from "@material-ui/icons/Today";

const Education = ({ data, color }) => {
  const education = data.education;
  return (
    <div className="education">
      <p className="heading" style={{ color: `${color.primary}` }}>
        Education
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      {education.map((item, index) => (
        <div key={index} className="row-table">
          <div className="left-column">
            {item.year && (
              <p className="year">
                <TodayIcon style={{ height: "15px" }} />
                {item.year}
              </p>
            )}

            {item.percentage.length > 0 && (
              <p className="score" style={{ color: `${color.primary}` }}>
                {item.percentage <= 10
                  ? `CGPA: ${item.percentage}`
                  : `Percentage: ${item.percentage}`}
              </p>
            )}
          </div>
          <div className="right-column">
            <p className="course">{item.course}</p>
            <p className="institution">{item.institution}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
