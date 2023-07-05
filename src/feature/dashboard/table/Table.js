import React from "react";
import { fakers } from "../../../fakers";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.scss";

export const DashboardTable = () => {
  var name = [
    fakers[0]["Groups/0/Keys/0"],
    fakers[0]["Groups/1/Keys/0"],
    fakers[0]["Groups/2/Keys/0"]
  ];
  var first = fakers
    .slice(0, 3)
    .map((f) => f["Groups/0/Metrics/BlendedCost/Amount"]);
  var second = fakers
    .slice(0, 3)
    .map((f) => f["Groups/1/Metrics/BlendedCost/Amount"]);
  var third = fakers
    .slice(0, 3)
    .map((f) => f["Groups/2/Metrics/BlendedCost/Amount"]);
  var xLabels = fakers.slice(0, 3).map((f) => f["TimePeriod/Start"]);

  return (
    <TableContainer component={Paper} className="table-data">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Service</TableCell>
            {xLabels.map((i) => (
              <TableCell align="right">{i}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {name.map((name, index) => (
            <TableRow
              key={name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right">{first[index]}</TableCell>
              <TableCell align="right">{second[index]}</TableCell>
              <TableCell align="right">{third[index]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
