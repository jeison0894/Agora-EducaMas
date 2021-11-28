import React from "react";

import { Button } from "react-bootstrap";
import "./showProjects.css";
import { Link } from "react-router-dom";
import TitleSection from "../../../../componentes/titles/TitleSection";
import TitleSectionWithButton from "../../../../componentes/titles/TitleSectionWitButton";
import { useSelector } from "react-redux";

export const ShowProjects = () => {
<<<<<<< HEAD
  

  const projects = useSelector((state) => state.projects)
  const auth = useSelector((state) => state.auth);
  const { isTeacher, isAdmin } = auth;

  return (
    <>
    {isAdmin || isTeacher ? (
             
      <TitleSectionWithButton
        name={"BRIEFS DE LA PROMO"}
        btnName={"Agregar Proyecto"}
        url={"/crearProyecto"}
      />
=======
  const projects = useSelector((state) => state.projects);
  const auth = useSelector((state) => state.auth);
  return (
    <>
      {auth.isAdmin ? (
        <TitleSectionWithButton
          name={"BRIEFS DE LA PROMO"}
          btnName={"Agregar Proyecto"}
          url={"/crearProyecto"}
        />
>>>>>>> b25269287d2e494bf58ebd50e22e112cb11cc6c1
      ) : (
        <TitleSection name={"BRIEFS DE LA PROMO"} />
      )}

      <div className="cardsGrid">
        {projects.map((project, i) => (
          <div key={i} className="cardProject">
            <div className="imgProject"></div>
            <div className="cardContent">
              <h5 className="titleProject">{project.name}</h5>
              <div className="descriptionContainer">
                <p className="descriptionProject">{project.description}</p>
              </div>
              <div className="buttonContainer">
                <Link to={`/proyectos/${project.id}`} className="btnProject">
                  Ver mas
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
