import React from "react";
import GeneralInformation from "./GeneralInformation";
import "./MainSection.css";

export default function MainSection() {
  return (
    <div className="MainSection">
      <div>Main Section</div>
      <GeneralInformation />
      <div>Section 2</div>
    </div>
  );
}
