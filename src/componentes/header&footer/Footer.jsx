import React from "react";
import logosWhite from "../../assets/logos/logosWhite.png";

import "./headerFooterStyles.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <p>Todos los derechos reservados @2021</p>

          <div className="socialNetworksContainer">
            <box-icon
              name="facebook-circle"
              type="logo"
              color="#ffffff"
              style={{ cursor: "Pointer" }}
            ></box-icon>

            <box-icon
              name="instagram"
              type="logo"
              color="#ffffff"
              style={{ cursor: "Pointer" }}
            ></box-icon>

            <box-icon
              name="youtube"
              type="logo"
              color="#ffffff"
              style={{ cursor: "Pointer" }}
            ></box-icon>
          </div>

          <div className="LogosFooterContainer">
            <img src={logosWhite} alt="Programate-LogoBlanco" />
          </div>
        </div>
      </footer>
    </>
  );
}
