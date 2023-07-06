import React, { useState } from 'react';
import './form.scss';

import { Link } from 'react-router-dom';


const Panel = () => {
    const [entreprise, setEntreprise] = useState('');
    const [info_entreprise, setInfoEntreprise] = useState('');
    const [marge, setMarge] = useState('');
    const [environnement, setEnvironnement] = useState('');
    const [service, setService] = useState('');
  
    const handleEntrepriseChange = (event) => {
      setEntreprise(event.target.value);
    };
  
    const handleInfoEntrepriseChange = (event) => {
      setInfoEntreprise(event.target.value);
    };
  
    const handleMargeChange = (event) => {
      setMarge(event.target.value);
    };
  
    const handleEnvironnementChange = (event) => {
      setEnvironnement(event.target.value);
    };
  
    const handleServiceChange = (event) => {
      setService(event.target.value);
    };
  
    const handleSubmit = (event) => {

      event.preventDefault();
      // Envoyer les données à votre backend ou effectuer une action supplémentaire ici
      console.log('Entreprises:', entreprise);
      console.log('Informations Entreprises:', info_entreprise);
      console.log('Marge:', marge);
      console.log('Environnement:', environnement);
      console.log('Service:', service);

      // Réinitialiser les champs du formulaire
      setEntreprise('');
      setInfoEntreprise('');
      setMarge('');
      setEnvironnement('');
      setService('');
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
        </div>
  
        <h1>Information Entreprise</h1>
          <div>
            <label htmlFor="info_entreprise">Entreprise</label>
            <input
              type="text"
              id="info_entreprise"
              value={info_entreprise}
              onChange={handleInfoEntrepriseChange}
              required
            />
          </div>
          <div>
            <label htmlFor="marge">Marge</label>
            <input
              type="text"
              id="marge"
              value={marge}
              onChange={handleMargeChange}
              required
            />
          </div>
          <div>
            <label htmlFor="environnement">Environnement</label>
            <select className='Box'
              id="environnement"
              value={environnement}
              onChange={handleEnvironnementChange}
              required
            >
              <option value="">Sélectionner un environnement</option>
              <option value="Environnement 1">Environnement 1</option>
              <option value="Environnement 2">Environnement 2</option>
              <option value="Environnement 3">Environnement 3</option>
            </select>
          </div>
          <div>
            <label htmlFor="service">Service</label>
            <select className='Box'
              id="service"
              value={service}
              onChange={handleServiceChange}
              required
            >
              <option value="">Sélectionner un service</option>
              <option value="Service 1">Service 1</option>
              <option value="Service 2">Service 2</option>
              <option value="Service 3">Service 3</option>
            </select>
          </div>
          <Link to="/admin/new-client">
            <button type='submit'>Suivant</button>
        </Link>
        </form>
      </div>
    );
  };
  
  export default Panel;
  