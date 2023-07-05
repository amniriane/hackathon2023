import { Divider } from "@mui/material";
import "./List.scss";
import React from "react";

export const NotificationList = () => {
  return (
    <div className="notification-list">
      <div className="notification-header">Messages</div>
      <div>
        <div className="message activated">Acceuil au sein de Catcops.</div>
        <Divider></Divider>
        <div className="message">Votre profil a été mise à jour.</div>
        <Divider></Divider>
        <div className="message">Vous avez été ajouté à l'Estiam.</div>
        <Divider></Divider>
        <div className="message">Création de votre compte.</div>
      </div>
    </div>
  );
};
