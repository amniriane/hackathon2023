import React, { useState } from 'react';
import admin from "../../assets/user.png";

const AdminCreationForm = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique pour créer l'administrateur
    console.log('Administrateur créé :', { nom, prenom, email });
    // Réinitialiser les champs du formulaire
    setNom('');
    setPrenom('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src={admin} alt="admin"/>
      <div>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={handleNomChange}
        />
      </div>
      <div>
        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={handlePrenomChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button type="submit">Créer l'administrateur</button>
    </form>
  );
};

export default AdminCreationForm;
