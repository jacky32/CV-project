import React from "react";

function ExperienceBox(props) {
  const experience = props.experience;
  return (
    <div key={"experienceId" + props.index} className="Box">
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
      <button
        onClick={() => {
          props.handleDelete(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default ExperienceBox;
