import React from "react";
import { fakers } from "../../../fakers";
import { LineChart } from "@mui/x-charts/LineChart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const DashboardTable = () => {
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
