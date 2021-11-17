import React from "react";
import logo from "../../assets/logos/programateLogo.png";
import projectIcon from "../../assets/icons/projects-icon.svg";
import dashboardIcon from "../../assets/icons/dashboard-icon.svg";
import forumIcon from "../../assets/icons/forum-icon.svg";

import "./headerFooterStyles.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="hamburguerMenu">
            <box-icon name="menu"></box-icon>
          </div>

          <img className="Logo" src={logo} alt="Prográmate-logotipo" />

          <div className="iconsContainer">
            <div>
              <img src={dashboardIcon} alt="dashboardIcon" />
              <a href="#!">Dashboard</a>
            </div>

            <div>
              <img src={projectIcon} alt="projectIcon" />
              <a href="#!">Projectos</a>
            </div>

            <div>
              <img src={forumIcon} alt="forumIcon" />
              <a href="#!">Foro</a>
            </div>
          </div>

          <div className="notificationsConfigContainer">
            <box-icon name="bell"></box-icon>
            <b>
              <span> 3</span>
            </b>
            <a className="btnConfig" href="#!">
              ⚙
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
