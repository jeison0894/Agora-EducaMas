import React from "react";
import TitleSection from "../../componentes/titles/TitleSection";
import Chart from "./charts/Chart";

const Dashboard = () => {
  return (
    <>
      <TitleSection name="Bienvenido a Prográmate Dashboard" />
      <div className="chartContainerMain">
        <div className="chartsContainer">
          <div className="chartContainer">
            <p className="nameChart">Progreso de la promo</p>
            <Chart color="#FFC107" number={32} />
          </div>

          <div className="chartContainer">
            <p className="nameChart">Tasa de éxito de la promo</p>
            <Chart color="#0D9603" number={67} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
