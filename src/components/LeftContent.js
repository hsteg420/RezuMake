import React from "react";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Involvement from "./components/Involvement";
import Interests from "./components/Interests";

const LeftContent = ({ data, color }) => {
  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      className="left-content"
      style={{ backgroundColor: `${color.background}` }}
    >
      <Contact data={data} color={color} />
      {check(data.skills) && <Skills data={data} color={color} />}
      {check(data.interests) && <Interests data={data} color={color} />}
      {check(data.Involvement) && <Involvement data={data} color={color} />}
    </div>
  );
};

export default LeftContent;
