import React from "react";

const Summary = ({ data, color }) => {
  const Summary = data.Summary;
  return (
    <div className="Summary">
      <p className="heading" style={{ color: `${color.primary}` }}>
        Summary
      </p>
      <hr style={{ borderColor: `${color.primary}` }} />
      <div className="item">{Summary}</div>
    </div>
  );
};

export default Summary;
