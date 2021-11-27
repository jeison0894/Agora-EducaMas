import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "../notFound/NotFound";
import Deliverie from "../../pages/Deliverie";

function Autentification() {
  const auth = useSelector((state) => state.auth);
  const { isLogged } = auth;
  return (
    <Router>
      <Routes>
        <Route
          path="/user/deliverie/:id_deliverie"
          element={isLogged ? <Deliverie /> : <NotFound />}
          exact
        />
      </Routes>
    </Router>
  );
}
export default Autentification;
