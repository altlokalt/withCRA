import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
const DetailBuilding = React.lazy(() => import("pages/DetailBuilding"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
const Register = React.lazy(() => import("pages/Register"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<ProtectedRoute element={Login} />} />
          <Route
            path="/register"
            element={<ProtectedRoute element={Register} />}
          />
          <Route
            path="/forgotpassword"
            element={<ProtectedRoute element={ForgotPassword} />}
          />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/detailbuilding" element={<DetailBuilding />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
