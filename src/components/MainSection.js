import React from "react";
import EducationInformation from "./EducationInformation";
import ExperienceInformation from "./ExperienceInformation";
import GeneralInformation from "./GeneralInformation";
import "./MainSection.css";

export default function MainSection() {
  return (
    <div className="MainSection">
      <h2>CV</h2>
      <GeneralInformation />
      <EducationInformation />
      <ExperienceInformation />
    </div>
  );
}
