import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "../Molecules/LoginForm";
import RegisterForm from "../Molecules/RegisterForm";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RegisterForm />} />
        <Route path="/user/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
