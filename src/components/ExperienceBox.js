import React from "react";

function ExperienceBox(props) {
  const experience = props.experience;
  return (
    <div key={experience.companyName + experience.position} className="Box">
      <div>
        <strong>{experience.position}</strong>
      </div>
      <div>
        <i>{experience.companyName}</i>
      </div>
      <div>{experience.mainTasks}</div>
      <div>
        {experience.dateFrom} - {experience.dateTo}
      </div>
    </div>
  );
}

export default ExperienceBox;
