import React from "react";

function EducationBox(props) {
  const school = props.school;
  return (
    <div key={"educationId" + props.index} className="Box">
      <div>
        <strong>{school.schoolName}</strong>
      </div>
      <div>
        <i>{school.titleOfStudy}</i>
      </div>
      <div>
        {school.dateFrom} - {school.dateTo}
      </div>
    </div>
  );
}

export default EducationBox;
