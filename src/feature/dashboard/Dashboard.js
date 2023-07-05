import React from "react";
import { useParams } from "react-router-dom";
import "./Dashboard.scss";
import { fakers } from "../../fakers";
import { DashboardChart } from "./chart/Chart";
import { DashboardTable } from "./table/Table";
import { DashboardLayout } from "./layout/Layout";

const Dashboard = () => {
  const [type, setType] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const switchType = (value) => {
    setType(value);
  };

  var name = [
    fakers[0]["Groups/0/Keys/0"],
    fakers[0]["Groups/1/Keys/0"],
    fakers[0]["Groups/2/Keys/0"],
  ];

  var first = fakers
    .slice(0, 10)
    .map((f) => f["Groups/0/Metrics/BlendedCost/Amount"]);
  var second = fakers
    .slice(0, 10)
    .map((f) => f["Groups/1/Metrics/BlendedCost/Amount"]);
  var third = fakers
    .slice(0, 10)
    .map((f) => f["Groups/2/Metrics/BlendedCost/Amount"]);

  var sum = [...first, ...second, ...third].reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );

  var sumDetails = [
    first[selectedIndex],
    second[selectedIndex],
    third[selectedIndex],
  ].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return (
    <div className="layout-dashboard">
      <DashboardLayout title="Général"></DashboardLayout>
      <div className="dashboard-content global">
        <div className="header">
          <div className="title">{name[selectedIndex]}</div>
          <div className="top-btn">
            <div className="btn-details">
              Details
              <span class="icon material-icons-outlined">arrow_forward</span>
            </div>
            <div className="btn-invoice">
              Factures
              <span class="icon material-icons-outlined">file_download</span>
            </div>
          </div>
        </div>
        <div className="state">
          <div>
            <div className="sub-title">Coût total</div>
            <div className="cost-box">
              <div className="price">{sumDetails}</div>
              <div className="percent">+50%</div>
            </div>
          </div>
        </div>
        <div className="data">
          <div className="filter-data">
            <div className="date">
              <div>mois</div>
              <span class="material-icons-outlined">expand_more</span>
            </div>
            <div className="type">
              <div
                className={type == 0 ? "activated btn-type" : "btn-type"}
                onClick={() => switchType(0)}
              >
                Tableau
              </div>
              <div
                className={type == 1 ? "activated btn-type" : "btn-type"}
                onClick={() => switchType(1)}
              >
                Graphique
              </div>
            </div>
          </div>
          <div className="data-display">
            {type == 0 ? <DashboardChart /> : <DashboardTable />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
