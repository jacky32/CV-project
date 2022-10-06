import React, { Component } from "react";
import "./Section.css";
import InputField from "./InputField";

export default class GeneralInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Name name",
      email: "email@mail.com",
      phoneNumber: "+123 456 789 987",
      isToggledOn: false,
    };
  }

  setUser = (e) => {
    e.preventDefault();
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const phone = document.getElementById("userPhone").value;
    this.setState(
      {
        name: name,
        email: email,
        phone: phone,
      },
      () => {
        this.toggleForm();
      }
    );
  };

  toggleForm = () => {
    const form = document.getElementById("GeneralInformationForm");
    const user = document.getElementById("UserInformation");
    form.classList.toggle("Hidden");
    user.classList.toggle("Hidden");
  };

  render() {
    return (
      <div className="Section">
        <div className="SectionName">
          <div></div>
          <button onClick={this.toggleForm}>Edit</button>
        </div>
        <form
          id="GeneralInformationForm"
          className="SectionForm"
          onSubmit={this.setUser}
        >
          <InputField inputId="userName" tag="Name:" type="text" />
          <InputField inputId="userEmail" tag="Email:" type="email" />
          <InputField inputId="userPhone" tag="Phone number:" type="tel" />
          <button type="submit">Submit</button>
        </form>
        <div id="UserInformation" className="Hidden">
          <div>
            <strong>{this.state.name}</strong>
          </div>
          <div>{this.state.email}</div>
          <div>{this.state.phoneNumber}</div>
        </div>
      </div>
    );
  }
}
