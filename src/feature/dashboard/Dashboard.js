import React from "react";
import { useParams } from "react-router-dom";
import "./Dashboard.scss";

const Dashboard = () => {
  const { id } = useParams();
  return (
    <div className="layout-dashboard">
      <div className="dashboard-content"></div>
      <div className="dashboard-content"></div>
    </div>
  );
};

export default Dashboard;
