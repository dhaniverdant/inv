import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import dhani from '../Assets/Images/dhani.jpg';
import utari from '../Assets/Images/utari.jpg';
import '../Assets/Styles/Second.css';

const Second = () => {
  return (
    <div id="second" className='second-wrapper'>
      <div className='greetings'>Assalamu’alaikum Wr. Wb.</div>
      <p className='container greetings-intro'>Tanpa mengurangi rasa hormat,
        kami memberikan kabar bahagia ini dan memohon restu dari bapak, ibu, &amp; 
        rekan sekalian untuk senantiasa mendoakan kelancaran acara 
        pernikahan kami.</p>
      <div className='d-flex flex-column align-items-center'>
        {/* <img src={user} alt="icon" style={{ width: "180px", height: "180px" }} />
        <img src={user} alt="icon" style={{ width: "180px", height: "180px" }} /> */}
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={dhani} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text brides-name">Rahmad Ramdhani</p>
            <p className="card-text">Putra dari Bapak Jamaluddin dan Ibu Rahmaniar</p>
          </div>
        </div>
        <div className="card" style={{width: "18rem", marginTop: "20px", marginBottom: "20px"}}>
          <img className="card-img-top" src={utari} alt="Card image cap" />
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