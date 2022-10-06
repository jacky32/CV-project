import React, { Component } from "react";
import "./Section.css";

export default class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
    };
  }

  render() {
    return (
      <div className="Section">
        <div className="SectionName">General Information</div>
        <div className="SectionItem">Name:</div>
        <div className="SectionItem">Email:</div>
        <div className="SectionItem">Phone Number:</div>
      </div>
    );
  }
}
