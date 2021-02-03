import React from "react";
import "./SkillComponent.css";

const SkillComponent = ({ image, name }) => {
  return (
    <div className="skillComponent">
      <img src={image} alt="" />
      <span class="tooltiptext">{name}</span>
    </div>
  );
};

export default SkillComponent;
