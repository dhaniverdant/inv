import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Assets/Styles/Second.css';
import dhani from '../Assets/Images/dhani.jpg';
import utari from '../Assets/Images/utari.jpg';

const Second = () => {
  return (
    <div id="second" className='second-wrapper'>
      <div className='container greetings mb-2'>Assalamu’alaikum Warahmatullahi Wabarakatuh</div>
      <p className='container greetings-intro'>Maha suci Allah SWT yang telah menciptakan mahluknya berpasang-pasangan. Tanpa mengurangi rasa hormat,
        kami memberikan kabar bahagia ini dan memohon restu dari Bapak, Ibu dan
        rekan sekalian untuk acara pernikahan kami:</p>
      <div className='d-flex flex-column align-items-center'>
        <div className="card first-card">
          <img className="card-img-top" src={dhani} alt="Card cap" />
          <div className="card-body">
            <p className="card-text brides-name">Rahmad Ramdhani</p>
            <p className="card-text">Putra dari Bapak Jamaluddin dan Ibu Rahmaniar</p>
          </div>
        </div>
        <div className="card second-card">
          <img className="card-img-top" src={utari} alt="Card cap" />
          <div className="card-body">
            <p className="card-text brides-name">Utari Sapta Anugrah</p>
            <p className="card-text">Putri dari Bapak Abdul Wahab M. Nur dan Ibu Nursian</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;