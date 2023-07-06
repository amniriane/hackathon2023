import React, { useState } from 'react';
import { useContext } from 'react';
import './form.scss';
import user from "../../assets/user.png";


const CreateClientForm = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  const handleNomChange = (event) => {
    const nouveauNom = event.target.value;
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
    // Envoyer les données à votre backend ou effectuer une action supplémentaire ici
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Email:', email);
    // Réinitialiser les champs du formulaire
    setNom('');
    setPrenom('');
    setEmail('');
  };

  return (
    <form className="UserForm" onSubmit={handleSubmit}>
      <img src={user} alt="User"/>
      <div>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          onChange={handleNomChange}
          required
        />
      </div>
      <div>
        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={handlePrenomChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      
      <button type="submit">Créer l'utilisateur</button>
    </form>
  );
};

export default CreateClientForm;