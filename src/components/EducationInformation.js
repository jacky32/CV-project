import React, { Component } from "react";
import "./Section.css";

export default class EducationInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "",
      titleOfStudy: "",
      dateFrom: new Date(),
      dateTo: new Date(),
    };
  }

  render() {
    return (
      <div className="Section">
        <div className="SectionName">Education Information</div>
        <div className="SectionItem">School name:</div>
        <div className="SectionItem">Title of study:</div>
        <div className="SectionItem">Date from:</div>
        <div className="SectionItem">Date to:</div>
      </div>
    );
  }
}
