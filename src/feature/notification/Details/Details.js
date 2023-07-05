import "./Details.scss";
import React from "react";
import logo from "../../../assets/logo.png";

export const NotificationDetails = () => {
  var dateNow = new Date();
  return (
    <div className="notification-details">
      <div className="notification-details-header">
        <div className="details-title">Acceuil au sein de Catcops.</div>
        <div className="details-info">
          <div>{dateNow.toLocaleDateString()} -</div>
          <span class="material-icons-outlined">star_outline</span>
          <span class="material-icons-outlined">more_vert</span>
        </div>
      </div>
      <div className="notification-details-body">
        <div>
          Bienvenue sur Catcops, voici une vidéo explicative du fonctionnement
          de notre application.
        </div>
        <div>
          Votre profil devrait être ajouté aux différents projet sous peu.{" "}
        </div>
        <div>
          <div>Merci pour votre confiance.</div>
          <div>L'équipe de Catcops</div>
          <img src={logo} className="logo" />
        </div>
      </div>
      <div className="notification-details-footer"></div>
    </div>
  );
};
