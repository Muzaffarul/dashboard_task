import React from "react";
import InputBox from "../../form/InputBox";
import flag1 from "../../../../src/assets/Flag.svg";
import flag2 from "../../../../src/assets/Flag (1).svg";

export default function Form() {
    return (
        <div className="pagination-mian-table">
            <div className="">
                <h3 className="m-0 fs-22 black-262 fw-bold">Form title</h3>
                <p className="m-0 fs-12 black-262 text-start fw-normal">
                    Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.
                </p>
            </div>
            <div className="language-frame">
                <div className="lug-box">
                    <img src={flag1} alt="flag"/>{" "}
                    <p className="m-0 fs-12 black-262 text-start fw-normal">English</p>
                </div>
                <div className="lug-box">
                    <img src={flag2} alt="flag"/>{" "}
                    <p className="m-0 fs-12 black-262 text-start fw-normal">Turkish</p>
                </div>
            </div>
            <InputBox
                value=""
                type="text"
                label="Label title"
                placeholder="Placeholder content"
                onChange={(e) => {}}/>
            <InputBox
                value=""
                type="dropdown"
                label="Label title"
                placeholder="Chose"
                onChange={(e) => {}}/>
            <div className="d-flex align-items-center justify-content-between gap-20 w-100">
                <InputBox
                    value=""
                    type="text"
                    label="Label title"
                    placeholder="Placeholder content"
                    onChange={(e) => {}}/>
                <InputBox
                    value=""
                    type="text"
                    label="Label title"
                    placeholder="Placeholder content"
                    onChange={(e) => {}}/>
            </div>
            <InputBox
                value=""
                type="textarea"
                label="Label title"
                placeholder="Placeholder content"
                onChange={(e) => {}}/>
        </div>
    );
}
