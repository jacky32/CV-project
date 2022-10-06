import React, { Component } from "react";
import InputField from "./InputField";
import EducationBox from "./boxes/EducationBox";
import "./Section.css";

export default class EducationInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [
        {
          schoolName: "Name",
          titleOfStudy: "Title",
          dateFrom: new Date(Date.now()).toLocaleDateString(),
          dateTo: new Date(Date.now()).toLocaleDateString(),
        },
      ],
    };
  }

  setEducation = (e) => {
    const schoolName = document.getElementById("schoolName").value;
    const titleOfStudy = document.getElementById("titleOfStudy").value;
    const dateFrom = document.getElementById("eduDateFrom").value;
    const dateTo = document.getElementById("eduDateTo").value;
    this.setState(
      {
        school: {
          schoolName: schoolName,
          titleOfStudy: titleOfStudy,
          dateFrom: new Date(Date.parse(dateFrom)).toLocaleDateString(),
          dateTo: new Date(Date.parse(dateTo)).toLocaleDateString(),
        },
      },
      () => {
        e.target.reset();
        this.toggleEducation();
      }
    );
  };

  onSubmitEducation = async (e) => {
    e.preventDefault();
    await this.setEducation(e);
    this.setState({
      schools: this.state.schools.concat(this.state.school),
      school: {
        schoolName: "",
        titleOfStudy: "",
        dateFrom: new Date().toLocaleTimeString(),
        dateTo: new Date().toLocaleTimeString(),
      },
    });
  };

  toggleEducation = () => {
    const form = document.getElementById("EducationInformationForm");
    form.classList.toggle("Hidden");
  };

  handleDelete = (index) => {
    this.setState({
      schools: this.state.schools.filter((school, schoolIndex) => {
        return schoolIndex !== index;
      }),
    });
  };

  render() {
    return (
      <div className="Section">
        <div className="SectionName">
          <div>Education</div>
          <button onClick={this.toggleEducation}>+</button>
        </div>
        <form
          id="EducationInformationForm"
          className="SectionForm Hidden"
          onSubmit={this.onSubmitEducation}
        >
          <InputField inputId="schoolName" tag="School name:" type="text" />
          <InputField
            inputId="titleOfStudy"
            tag="Title of study:"
            type="text"
          />
          <InputField inputId="eduDateFrom" tag="Date from:" type="date" />
          <InputField inputId="eduDateTo" tag="Date to:" type="date" />
          <button type="submit">Submit</button>
        </form>
        <div>
          {this.state.schools.map((school, index) => {
            return (
              <EducationBox
                school={school}
                index={index}
                handleDelete={this.handleDelete}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
