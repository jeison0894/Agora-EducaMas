import React from "react";
import { useSelector } from "react-redux";
import TitleSection from "../../../../componentes/titles/TitleSection";
import AddLink from "./addLink/addLinks";
import "./deliveryStyles.css";

const DeliveryProjectStudent = () => {
  const projects = useSelector((state) => state.projects);
  const deliveries = useSelector((state) => state.deliveries);

  console.log(projects, deliveries);
  return (
    <>
      <TitleSection name={"ENTREGAS"} />
      <div className="deliveryContainer">
        <div className="selectsContainer">
          <select>
            <option value="">Ver Proyectos entregados</option>
          </select>
        </div>

        <div className="chatMain">
          <div className="chatContainer">
            <div className="cardChatContainer cardChatContainerStudent">
              <h5 className="titleProject">Titulo del Brief</h5>

              <div className="cardStudent">
                <b className="nameUser">Nombre estudiante</b>
                <p className="messageSend">Mensaje enviado</p>
                <div className="linksContainer">
                  <ul>
                    <li>
                      <a href="#!">Link 1</a>
                    </li>
                    <li>
                      <a href="#!">Link 2</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="cardStudent">
                <b className="nameUser">Nombre estudiante</b>
                <p className="messageSend">Mensaje enviado</p>
                <div className="linksContainer">
                  <ul>
                    <li>
                      <a href="#!">Link 1</a>
                    </li>
                    <li>
                      <a href="#!">Link 2</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="cardStudent">
                <b className="nameUser">Nombre estudiante</b>
                <p className="messageSend">Mensaje enviado</p>
                <div className="linksContainer">
                  <ul>
                    <li>
                      <a href="#!">Link 1</a>
                    </li>
                    <li>
                      <a href="#!">Link 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="inputContainer">
              <AddLink />
            </div>
          </div>
          <div className="competenciesContainer"></div>
        </div>
      </div>
    </>
  );
};

export default DeliveryProjectStudent;
