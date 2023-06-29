import React from "react";
import home from "../../assets/u_home-alt.svg";
import contact from "../../assets/u_list-ul.svg";
import categories from "../../assets/u_list-ui-alt.svg";
import setting from "../../assets/u_cog.svg";
import setting_blak from "../../assets/u_cog-black.svg";
import dashed from "../../assets/darhboard.svg";
import plus from "../../assets/u_plus.svg";
import serch from "../../assets/u_search.svg";
import profile from "../../assets/Ellipse 1.png";
import shop from "../../assets/u_shop.svg";
import user from "../../assets/u_users-alt.svg";
import list_blue from "../../assets/u_list-ui-alt (1).svg";
import shopbag from "../../assets/u_shopping-bag.svg";
import warning from "../../assets/u_info-circle.svg";
import edit from "../../assets/ButtonMini.png";
import arrowLeft from "../../assets/Expand_left_double.svg";
import right_arrow from "../../assets/Expand_right_double.svg";
import delet from "../../assets/ButtonMini (1).png";

import "./Dashboard.scss";
import Accordion from "react-bootstrap/Accordion";
import InputBox from "../../components/form/InputBox";
import { Form } from "../../components/commonElements";

const dropdown = [
  { name: "Dashboard" },
  { name: "Application" },
  { name: "Elements" },
  { name: "Forms" },
  { name: "Plugins" },
  { name: "Elements" },
  { name: "Datagrid" },
  { name: "Settings" },
];
const tabledata = [
  {
    first: "Etiam purus in",
    second: "Curabitur donec duis",
    third: "Morbi pharetra, accumsan",
  },
  {
    first: "Duis eget habitant",
    second: "At amet odio",
    third: "Commodo eget scelerisque",
  },
  {
    first: "Aliquam velit lacus",
    second: "Pellentesque egestas placerat",
    third: "Tortor habitant sit",
  },
  {
    first: "Fermentum scelerisque ultricies",
    second: "Morbi sagittis nulla",
    third: "Quam semper quis",
  },
  {
    first: "Integer semper pellentesque",
    second: "Neque turpis enim",
    third: "Egestas non sociis",
  },
  {
    first: "Parturient at id",
    second: "Sem neque, mattis",
    third: "Pellentesque facilisis massa",
  },
  {
    first: "Fermentum scelerisque ultricies",
    second: "Morbi sagittis nulla",
    third: "Quam semper quis",
  },
  {
    first: "Integer semper pellentesque",
    second: "Neque turpis enim",
    third: "Egestas non sociis",
  },
  {
    first: "Parturient at id",
    second: "Sem neque, mattis",
    third: "Pellentesque facilisis massa",
  },
];
export default function Dashboard() {
  return (
    <div className="main-dashboard-frame">
      <header className="header d-flex align-items-center justify-content-between">
        <ul className="header-ul">
          <li>
            <img src={home} alt="icon" />
            Home
          </li>
          <li>
            <img src={contact} alt="icon" />
            Contact
          </li>
          <li>
            <img src={categories} alt="icon" />
            Categories
          </li>
          <li>
            <img src={setting} alt="icon" />
            Setteing
          </li>
        </ul>
        <div className="profile">
          <img src={profile} alt="" />
          <p className="fs-14 p-name">İsmail İhsan Bülbül</p>
        </div>
      </header>
      <div className="dashboard-frame d-flex">
        {/* ================== SIDE NAVE BAR ==================== */}
        <div className="sdie-bar">
          <div className=" text-center">
            <button className="add-item fs-16">
              <img src={plus} alt="" />
              New Item
            </button>
          </div>
          <div className="acc-wrapper">
            <Accordion defaultActiveKey="0" flush>
              {dropdown?.map((item, i) => {
                return (
                  <Accordion.Item eventKey={i.toString()}>
                    <Accordion.Header>
                      {" "}
                      <img src={dashed} alt="" /> {item.name}
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="dropdown-ul">
                        <li>Commarce</li>
                        <li>Analytics</li>
                        <li>Cyrpto</li>
                        <li>Monitoring</li>
                        <li>Helpdesk</li>
                        <li>Fitnes</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        </div>
        {/* =================== SIDE NAVE END */}
        <div className="right-colome">
          <div className="serch-heaer">
            <div className="heading-add">
              <h3 className="fs-22 fw-bold black-262 m-0">Add new post</h3>
              <button className="add-item w-auto fw-light border-0 bg-white shadow-none fs-16">
                <img src={plus} alt="" />
                Add Content
              </button>
              <div className="setting fs-16 fw-normal">
                <img src={setting_blak} alt="icon" />
                Setteing
              </div>
            </div>
            <div className="serch-box-frame d-flex align-items-center justify-content-between">
              <input
                type="text"
                className="input-box px-0 fs-16 border-0 w-100"
                placeholder="Search content.."
              />
              <img src={serch} className="serch-icon wh24" alt="" />
            </div>
          </div>
          <div className="info-box-frame">
            <div className="infobox">
              <img src={shopbag} alt="" />
              <div className=" d-flex align-items-center justify-content-center flex-column ">
                <p className="m-0 fs-12 black-262 text-start fw-normal">
                  Total Sales
                </p>
                <h3 className="m-0 fs-22 black-262 fw-bold">$2,456</h3>
              </div>
            </div>
            <div className="infobox">
              <img src={shop} alt="" />
              <div className=" d-flex align-items-center justify-content-center flex-column ">
                <p className="m-0 fs-12 black-262 text-start fw-normal">
                  Total Expenses
                </p>
                <h3 className="m-0 fs-22 black-262 fw-bold">5,325</h3>
              </div>
            </div>
            <div className="infobox">
              <img src={user} alt="" />
              <div className=" d-flex align-items-center justify-content-center flex-column ">
                <p className="m-0 fs-12 black-262 text-start fw-normal">
                  Total Orders
                </p>
                <h3 className="m-0 fs-22 black-262 fw-bold">1,326</h3>
              </div>
            </div>
            <div className="infobox">
              <img src={list_blue} alt="" />
              <div className=" d-flex align-items-center justify-content-center flex-column ">
                <p className="m-0 fs-12 black-262 text-start fw-normal">
                  Total Sales
                </p>
                <h3 className="m-0 fs-22 black-262 fw-bold">$2,456</h3>
              </div>
            </div>
          </div>
          <div className="pagination-mian-table">
            <div className="">
              <h3 className="m-0 fs-22 black-262 fw-bold">Form title</h3>
              <p className="m-0 fs-12 black-262 text-start fw-normal">
                Sed tortor, sed velit ridiculus ipsum pharetra lacus odio
                gravida augue enim.
              </p>
            </div>
            <div className="alerat-box">
              <img src={warning} alt="icon" />
              <p className="m-0 chok-7F1 fs-12  text-start fw-normal">
                Senectus malesuada suspendisse bibendum elit amet vitae.
              </p>
            </div>
            <div className="table-frame w-100">
              <table className="w-100">
                <thead>
                  <tr className="table-head">
                    <th>Table Title</th>
                    <th>Table Title</th>
                    <th>Table Title</th>
                    <th>Table Title</th>
                  </tr>
                </thead>
                <tbody>
                  {tabledata.map((item, i) => {
                    return (
                      <tr key={i} className="tbody-row">
                        <td>{item.first}</td>
                        <td>{item.second}</td>
                        <td>{item.third}</td>
                        <td>
                          <img src={edit} className="edit" alt="" />
                          <img src={delet} className="delet" alt="" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="pagination-button-frame">
                <ul className="pagination-btn m-0">
                  <li>
                    <img src={arrowLeft} alt="" />
                  </li>
                  <li>1</li>
                  <li className="active-btn">2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>
                    <img src={right_arrow} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Form />
          <div className="last-section">
            <div className="form-table-frame">
              <Form no={true}/>
            </div>
            <div className="simple-form">
              <h3 className="m-0 fs-22 black-262 fw-bold">Form title</h3>
              <InputBox
                value=""
                type="text"
                label="Label title"
                placeholder="Placeholder content"
                onChange={(e) => {}}
              />
              <InputBox
                value=""
                type="dropdown"
                label="Label title"
                placeholder="Placeholder content"
                onChange={(e) => {}}
              />
              <InputBox
                value=""
                type="textarea"
                label="Label title"
                placeholder="Placeholder content"
                onChange={(e) => {}}
              />
               <button className='primary-btn w-100 fs-16'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
