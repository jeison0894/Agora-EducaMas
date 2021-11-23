import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./componentes/404/Error404";
import Footer from "./componentes/header&footer/Footer";
import Header from "./componentes/header&footer/Header";
import { Announcements } from "./pages/announcements/Announcements";
import CreateAnnouncement from "./pages/announcements/CreateAnnouncement";
import AddProject from "./pages/projects/trainer/addProject/AddProject";
import ShowProject from "./pages/projects/trainer/showProject/ShowProject";
import { ShowProjects } from "./pages/projects/trainer/showProjects/showProjects";

function Unification() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/crearProyecto" element={<AddProject />} />
          <Route path="/proyectos" element={<ShowProjects />} />
          <Route path="/proyectos/:id" element={<ShowProject />} />
          <Route path="/crearAnuncio" element={<CreateAnnouncement />} />
          <Route path="/anuncios" element={<Announcements />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Unification;
