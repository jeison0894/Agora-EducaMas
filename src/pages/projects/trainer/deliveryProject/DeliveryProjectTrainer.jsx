import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TitleSection from "../../../../componentes/titles/TitleSection";
import InputSend from "./addLink/InputSend";
import "./deliveryStyles.css";
import * as controllerProject from "../../../../controllers/controllerProject";

const DeliveryProjectTrainer = () => {
  const [projects, setProjects] = useState([])
  const [deliverie, setDeliverie] = useState([])
  const students = useSelector((state) => state.users)
  const token = useSelector((state) => state.token)

  useEffect(() => {
    const listProject = async () => {
      try {
        const res = await controllerProject.listProjects(token);
        setProjects(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    listProject();
  }, []);

  // useEffect(() => {
  //   const fetchAll = async () => {
  //     const resProjects = await axios.get("http://localhost:3005/api/agora/get-projects",{
  //       headers: {Authorization: token}})
  //     setProjects(resProjects.data)
  //     const resDeliverie = await axios.get("http://localhost:3005/api/agora/get-deliveries",{
  //       headers: {Authorization: token}})
  //     setDeliverie(resDeliverie.data)
  //   }
  //   fetchAll()
  //   console.log(projects)
  //   console.log(deliverie)
  //   console.log(students)
  // }, [])
  



  return (
    <>
    {console.log(students, projects)}
      <TitleSection name={"ENTREGAS"} />
      <div className="deliveryContainer">
        <div className="selectsContainer">
          <select>
            <option value="">Ver Proyectos entregados</option>
          </select>

          <select>
            <option value="">Selecciona un brief</option>
          </select>

          <select>
            <option value="">Selecciona un estudiante</option>
          </select>
        </div>

        <div className="chatMain">
          <div className="chatContainer">
            <div className="cardChatContainer">
              <h5 className="titleProject">Titulo del Brief</h5>

              <div className="cardStudent">
                <p>
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
                </p>
              </div>

              <div className="cardTrainer">
                <p>
                  <b className="nameUser">Nombre Formador</b>
                  <p className="messageSend">Mensaje enviado</p>
                </p>
              </div>

              <div className="cardStudent">
                <p>
                  <b className="nameUser">Nombre estudiante</b>
                  <p className="messageSend">Mensaje enviado</p>
                </p>
              </div>
            </div>

            <InputSend />
          </div>
          <div className="competenciesContainer"></div>
        </div>
      </div>
    </>
  );
};

export default DeliveryProjectTrainer;
