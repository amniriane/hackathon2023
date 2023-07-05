import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./List.scss";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Divider } from "@mui/material";

const ListInvoices = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  var dateNow = new Date();
  const invoices = [
    {
      id: 1,
      name: "facture 1",
      date: dateNow,
    },
    {
      id: 2,
      name: "facture 2",
      date: dateNow,
    },
    {
      id: 3,
      name: "facture 3",
      date: dateNow,
    },
    {
      id: 4,
      name: "facture 4",
      date: dateNow,
    },
  ];
 

  return (
    <div className="main-content">
      <h2>Factures</h2>
      <div>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
      </div>
      <div className="list-invoice">
        {invoices.map((invoice) => (
          <>
            <div key={invoice.id} className="list-item">
              <div className="title">
                {invoice.name} - {invoice.date.toLocaleDateString()}
              </div>
              <IconButton onClick={() => {}}>
                <span class="material-icons-outlined">file_download</span>
              </IconButton>
            </div>
          <Divider></Divider>
          </>
        ))}
      </div>
    </div>
  );
};

export default ListInvoices;
