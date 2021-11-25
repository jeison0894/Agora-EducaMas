import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from "./componentes/404/Error404";
//import Footer from "./componentes/header&footer/Footer";
import Header from "./componentes/header&footer/Header";
import { Announcements } from "./pages/announcements/Announcements";
import CreateAnnouncement from "./pages/announcements/CreateAnnouncement";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProject from "./pages/projects/trainer/addProject/AddProject";
import DeliveryProjectStudent from "./pages/projects/student/deliveryProject/DeliveryProjectStudent";
import DeliveryProjectTrainer from "./pages/projects/trainer/deliveryProject/DeliveryProjectTrainer";
import ShowProject from "./pages/projects/trainer/showProject/ShowProject";
import { ShowProjects } from "./pages/projects/trainer/showProjects/showProjects";
import Autentification from "./componentes/autentication/Autentification";

function Unification() {
  return (
    <> 
    <Autentification />
      <Router>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crearProyecto" element={<AddProject />} />
          <Route path="/proyectos" element={<ShowProjects />} />
          <Route path="/proyectos/:id" element={<ShowProject />} />
          <Route path="/crearAnuncio" element={<CreateAnnouncement />} />
          <Route path="/anuncios" element={<Announcements />} />
          <Route
            path="/entregasFormador"
            element={<DeliveryProjectTrainer />}
          />
          <Route
            path="/entregasEstudiante"
            element={<DeliveryProjectStudent />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        {/*  <Footer /> */}
      </Router>
    </>
  );
}

export default Unification;
