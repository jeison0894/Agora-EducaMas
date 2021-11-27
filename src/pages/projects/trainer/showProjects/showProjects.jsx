import React from "react";

import { Button } from "react-bootstrap";
import "./showProjects.css";
import { Link } from "react-router-dom";
import TitleSection from "../../../../componentes/titles/TitleSection";
import TitleSectionWithButton from "../../../../componentes/titles/TitleSectionWitButton";
import { useSelector } from "react-redux";

export const ShowProjects = () => {
  

  const projects = useSelector((state) => state.projects)
  const auth = useSelector(state => state.auth)
  return (
    <>
    {auth.isAdmin ? (
             
      <TitleSectionWithButton
        name={"BRIEFS DE LA PROMO"}
        btnName={"Agregar Proyecto"}
        url={"/crearProyecto"}
      />
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
              <Link to={`/proyectos/${project.id}`}>
                <Button variant="warning  font-weight-bold text-2 btn-sm p-2 px-3 btnProject">
                  Ver mas
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
