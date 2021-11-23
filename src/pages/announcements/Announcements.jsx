import React, { useEffect, useState } from "react";
import TitleSectionWithButton from "../../componentes/titles/TitleSectionWitButton";
import * as controllerAnnounce from "../../controllers/controllerAnnounce";

export const Announcements = () => {
  const [announce, setAnnounce] = useState([]);

  useEffect(() => {
    const listAnnounce = async () => {
      try {
        const res = await controllerAnnounce.listAnnounces();
        const data = await res.json();
        setAnnounce(data);
      } catch (error) {
        console.log(error);
      }
    };
    listAnnounce();
  }, []);

  const newdateFormat = (date) => {
    let newDate = new Date(date).toLocaleString();
    return newDate;
  };

  return (
    <>
      <TitleSectionWithButton
        name={"Anuncios"}
        btnName={"Crear anuncio"}
        url={"/crearAnuncio"}
      />
      <div style={{ marginBottom: "100px" }}>
        {announce.map((el, i) => (
          <div key={i} className="announceContainer">
            <h5>{el.titleAnnouncement}</h5>
            <div className="textAnnouncementContainer">
              <p>{el.textAnnouncement}</p>
              <small>
                <b>{newdateFormat(el.updatedAt)}</b>
              </small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
