import React, { Component } from "react";
import InputField from "./InputField";
import ExperienceBox from "./boxes/ExperienceBox";
import "./Section.css";

export default class ExperienceInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          companyName: "Name",
          position: "position",
          mainTasks: "tasks",
          dateFrom: new Date(Date.now()).toLocaleDateString(),
          dateTo: new Date(Date.now()).toLocaleDateString(),
        },
      ],
    };
  }

  setExperience = (e) => {
    const companyName = document.getElementById("companyName").value;
    const position = document.getElementById("position").value;
    const mainTasks = document.getElementById("mainTasks").value;
    const dateFrom = document.getElementById("dateFrom").value;
    const dateTo = document.getElementById("dateTo").value;
    this.setState(
      {
        experience: {
          companyName: companyName,
          position: position,
          mainTasks: mainTasks,
          dateFrom: new Date(Date.parse(dateFrom)).toLocaleDateString(),
          dateTo: new Date(Date.parse(dateTo)).toLocaleDateString(),
        },
      },
      () => {
        e.target.reset();
        this.toggleExperience();
      }
    );
  };

  onSubmitExperience = async (e) => {
    e.preventDefault();
    await this.setExperience(e);
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        companyName: "",
        position: "",
        mainTasks: "",
        dateFrom: new Date().toLocaleTimeString(),
        dateTo: new Date().toLocaleTimeString(),
      },
    });
  };

  toggleExperience = () => {
    const form = document.getElementById("ExperienceInformationForm");
    form.classList.toggle("Hidden");
  };

  handleDelete = (index) => {
    this.setState({
      experiences: this.state.experiences.filter(
        (experience, experienceIndex) => {
          return experienceIndex !== index;
        }
      ),
    });
  };

  render() {
    return (
      <div className="Section">
        <div className="SectionName">
          <div>Experience</div>
          <button onClick={this.toggleExperience}>+</button>
        </div>
        <form
          id="ExperienceInformationForm"
          className="SectionForm Hidden"
          onSubmit={this.onSubmitExperience}
        >
          <InputField inputId="companyName" tag="Company name:" type="text" />
          <InputField inputId="position" tag="Position:" type="text" />
          <InputField inputId="mainTasks" tag="Main tasks:" type="text" />
          <InputField inputId="dateFrom" tag="Date from:" type="date" />
          <InputField inputId="dateTo" tag="Date to:" type="date" />
          <button type="submit">Submit</button>
        </form>
        <div>
          {this.state.experiences.map((experience, index) => {
            return (
              <ExperienceBox
                experience={experience}
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
