import React from "react";
import EducationInformation from "./EducationInformation";
import GeneralInformation from "./GeneralInformation";
import "./MainSection.css";

export default function MainSection() {
  return (
    <div className="MainSection">
      <div>Main Section</div>
      <GeneralInformation />
      <EducationInformation />
    </div>
  );
}
