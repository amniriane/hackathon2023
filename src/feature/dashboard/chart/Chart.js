import React from "react";
import { fakers } from "../../../fakers";
import { LineChart } from "@mui/x-charts/LineChart";

export const DashboardChart = () => {
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

  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: first, label: "AWS..." },
        { data: second, label: "EC2.." },
        { data: third, label: "Amazon.." },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
};
