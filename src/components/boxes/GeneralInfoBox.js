import React from "react";

function GeneralInfoBox(props) {
  const info = props.info;
  return (
    <div key={info.email} className="Box">
      <div>
        <strong>{info.name}</strong>
      </div>
      <div>{info.email}</div>
      <div>{info.phoneNumber}</div>
    </div>
  );
}

export default GeneralInfoBox;
