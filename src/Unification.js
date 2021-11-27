import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux'
import NotFound from './componentes/notFound/NotFound'
import Login from './pages/auth/login/Login'
import Header from "./componentes/header&footer/Header";
import Error404 from "./componentes/404/Error404";
import { Announcements } from "./pages/announcements/Announcements";
import CreateAnnouncement from "./pages/announcements/CreateAnnouncement";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProject from "./pages/projects/trainer/addProject/AddProject";
import DeliveryProjectStudent from "./pages/projects/student/deliveryProject/DeliveryProjectStudent";
import DeliveryProjectTrainer from "./pages/projects/trainer/deliveryProject/DeliveryProjectTrainer";
// import Landing from './componentes/landing/Landing'
import ShowProject from "./pages/projects/trainer/showProject/ShowProject";
import { ShowProjects } from "./pages/projects/trainer/showProjects/showProjects";
import Autentification from "./componentes/autentication/Autentification";
import ForgotPassword from './pages/auth/forgotPassword/ForgotPassword'
import ResetPassword from './pages/auth/resetPassword/ResetPassword'
import Profile from './pages/auth/profile/Profile'
import EditUser from './pages/auth/profile/EditUser'
import Register from './pages/auth/register/Register'
import ActivationEmail from './pages/auth/activationEmail/ActivationEmail'



function Unification() {
  const auth = useSelector(state => state.auth)
  const { isLogged, isAdmin } = auth

  return (
    <> 
    <Autentification />
      <Router>
      <Header/>
        <Routes>
        <Route path= '/register' element={<Register/>} exact/>
        <Route path= '/user/activate/:activation_token' element={<ActivationEmail/>} exact/>
        <Route path='/forgot_password' element={<ForgotPassword />} exact />
        <Route
          path='/profile'
          element={isLogged ? <Profile /> : <NotFound />}
          exact
        />
        <Route
          path='/edit_user/:id'
          element={isAdmin ? <EditUser /> : <NotFound />}
          exact
        />
        <Route path= '/create_user' element={<Register/>} exact/>
        <Route
          path='/user/reset/:token'
          element={isLogged ? <NotFound /> : <ResetPassword />}
          exact
        />
        <Route path='/' element={isLogged ? <Dashboard /> : <Login/>}
          exact/>
        <Route
          path='/login'
          element={isLogged ? <NotFound /> : <Login />}
          exact
        />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
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
      </Router>
    </>
  );
}

export default Unification;