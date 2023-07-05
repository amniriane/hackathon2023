import React from "react";
import "./List.scss";
import IconButton from "@mui/material/IconButton";
import { Divider } from "@mui/material";

const ListInvoices = () => {
  
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
      <div className="btn-date">
        Date
        <span class="material-icons-outlined">arrow_drop_down</span>
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
