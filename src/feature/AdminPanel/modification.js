import React, { useState } from 'react';
import './form.scss';

const Modification = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [entreprise, setEntreprise] = useState('');
  const [utilisateur, setUtilisateur] = useState('');
  const [entreprise_utilisateur, setEntrepriseUtilisateur] = useState('');

  const handleEntrepriseUtilisateurChange = (event) => {
    setEntrepriseUtilisateur(event.target.value);
  };

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };

  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEntrepriseChange = (event) => {
    setEntreprise(event.target.value);
  };

  const handleUtilisateurChange = (event) => {
    setUtilisateur(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données à votre backend ou effectuer une action supplémentaire ici
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Email:', email);
    console.log('Entreprise:', entreprise);
    console.log('Utilisateur:', utilisateur);
    console.log('Entreprise Utilisateur:', entreprise_utilisateur);
    // Réinitialiser les champs du formulaire
    setNom('');
    setPrenom('');
    setEmail('');
    setEntreprise('');
    setUtilisateur('');
    setEntrepriseUtilisateur('');
  };

  return (
    <div className="menu">
      <form onSubmit={handleSubmit} className="create-user-form">
      <div className='FormHeader'>  
      <h1>Recherche</h1>
      <label htmlFor="entreprise">Entreprise</label>
          <select className='Box'
            id="entreprise"
            value={entreprise}
            onChange={handleEntrepriseChange}
            required
          >
            <option value="">Sélectionner une entreprise</option>
            <option value="Entreprise 1">Entreprise 1</option>
            <option value="Entreprise 2">Entreprise 2</option>
            <option value="Entreprise 3">Entreprise 3</option>
          </select>
          <label htmlFor="entreprise">Utilisateur</label>
          <select className='Box'
            id="utilisateur"
            value={utilisateur}
            onChange={handleUtilisateurChange}
            required
          >
            <option value="">Email</option>
            <option value="Utilisateur 1">Utilisateur 1</option>
            <option value="Utilisateur 2">utilisateur 2</option>
            <option value="utilisateur 3">utilisateur 3</option>
          </select>
          </div>
      <h1>Information Utilisateur</h1>
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            value={nom}
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
        <div>
        <label htmlFor="entreprise">Entreprise</label>
          <select className='Box'
            id="entreprise"
            value={entreprise}
            onChange={handleEntrepriseUtilisateurChange}
            required
          >
            <option value="">Sélectionner une entreprise</option>
            <option value="Entreprise 1">Entreprise 1</option>
            <option value="Entreprise 2">Entreprise 2</option>
            <option value="Entreprise 3">Entreprise 3</option>
          </select>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default Modification;
