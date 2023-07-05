import React from "react";
import { useParams } from "react-router-dom";
import "./Dashboard.scss";
import { fakers } from "../../fakers";
import { DashboardChart } from "./chart/Chart";

const Dashboard = () => {
  const [type, setType] = React.useState(1);

  const switchType = (value) => {
    setType(value);
  };

  var first = fakers
    .slice(0, 10)
    .map((f) => f["Groups/0/Metrics/BlendedCost/Amount"]);
  var second = fakers
    .slice(0, 10)
    .map((f) => f["Groups/1/Metrics/BlendedCost/Amount"]);
  var third = fakers
    .slice(0, 10)
    .map((f) => f["Groups/2/Metrics/BlendedCost/Amount"]);
  var xLabels = fakers.slice(0, 10).map((f) => f["TimePeriod/Start"]);

  var sum = [...first, ...second, ...third].reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );

  const { id } = useParams();

  return (
    <div className="layout-dashboard">
      <div className="dashboard-content global">
        <div className="header">
          <div className="title">Général</div>
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
              <div className="price">{sum}</div>
              <div className="percent">+50%</div>
            </div>
          </div>
          <div>
            <div className="sub-title">Nombre de service</div>
            <div className="cost-box">
              <div className="price">4</div>
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
          <DashboardChart />
        </div>
      </div>
      <div className="dashboard-content"></div>
    </div>
  );
};

export default Dashboard;
