import React from "react";
import "./FormCommon.scss";
import Dropdown from "react-bootstrap/Dropdown";

export default function InputBox({
  type = "text",
  label = "",
  value = "",
  name = "",
  placeholder = "",
  onChange,
}) {
  switch (type) {
    case "text":
      return (
        <div className="input-box-frame w-100">
          <p className="fs-14 fw-normal black-262 ">{label}</p>
          <input
            type={type}
            className="input-box fs-16 w-100"
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      );
    case "dropdown":
      return (
        <div className="input-box-frame w-100">
          <p className="fs-14 fw-normal black-262 ">{label}</p>
          <div className="dripDown-frame">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      );
    case "textarea":
      return(
        <div className="input-box-frame w-100">
        <p className="fs-14 fw-normal black-262 ">{label}</p>
        <textarea
          type={type}
          className="text-area fs-16 w-100"
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
        
      </div>
      )
  }
}
