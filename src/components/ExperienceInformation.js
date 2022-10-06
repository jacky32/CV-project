import React, { Component } from "react";
import "./Section.css";

export default class ExperienceInformation extends Component {
  render() {
    return (
      <div className="Section">
        <div className="SectionName">Experience Information</div>
        <div className="SectionItem">Company name:</div>
        <div className="SectionItem">Position:</div>
        <div className="SectionItem">Main Tasks:</div>
        <div className="SectionItem">Date from:</div>
        <div className="SectionItem">Date To:</div>
      </div>
    );
  }
}
