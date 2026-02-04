import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    localStorage.removeItem("authData");
    // localStorage.clear()
    navigate("/login");
  };

  return (
    <div>
      <Navbar title="Task Management" onLogout={handleLogout} />
      <h1>MY TASKS</h1>
      <TaskList />
    </div>
  );
};

export default Dashboard;
