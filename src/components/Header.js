import React from "react";
import skills from "../icons/skill.png";
import contact from "../icons/add-contact.png";
import proyects from "../icons/proyecto.png";

const header = () => {
  return (
    <header className="row">
      <nav className="navbar d-flex justify-content-end mt-4 col-12">
        <ul className="col-4 flex-row d-flex justify-content-center  navbar-nav">
          <li className="nav-item col-2 ">
            <a className="nav-link col-12" href="#skills"><figure className="col-12 d-flex justify-content-center mb-5"><img alt="" className="img-fluid" src={skills}></img></figure><p className="d-flex justify-content-center col-12">Skills</p></a>
          </li>
          <li className="nav-item col-2">
            <a className="nav-link col-12" href="#proyects"><figure className="col-12 mb-5 d-flex justify-content-center"><img alt="" className="img-fluid" src={proyects}></img> </figure><p className="col-12 d-flex justify-content-center">Proyects</p></a>
          </li>
          <li className="nav-item col-2">
            <a className="nav-link col-12" href="#contact"><figure className="col-12 mb-5 d-flex justify-content-center"><img alt="" className="img-fluid" src={contact}></img> </figure><p className="col-12 d-flex justify-content-center">Contact</p></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
