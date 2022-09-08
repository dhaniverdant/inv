import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Assets/Styles/Fourth.css';
import bsi from '../Assets/Images/bsi.png';
import mandiri1 from '../Assets/Images/mandiri1.png';
import BCA from '../Assets/Images/BCA.png';

const Fourth = () => {
  const [rekBsi] = useState(7146755466);
  const [rekMandiri] = useState(1370018116463);
  const [rekBca] = useState('0561949271');

  return (
    <div className='fourth-wrapper d-flex flex-column align-items-center'>
      <div className='our-agenda-title'>Amplop Digital</div>
      <div className='bank-wrapper shadow-lg p-3 mb-4 bg-white rounded'>
        <div className='d-flex align-items-center justify-content-center'>
          <img src={bsi} alt='bsi' style={{ width:'50px', height:'42px' }} />
        </div>
        <div>An. Utari Sapta Anugrah</div>
        <div>{rekBsi}</div>
        <button
          type='button'
          onClick={() => {navigator.clipboard.writeText(rekBsi)}}
          className='btn btn-success btn-block mt-2'
        >Copy No. Rekening</button>
      </div>

      <div className='bank-wrapper shadow-lg p-3 mb-4 bg-white rounded'>
        <div className='d-flex align-items-center justify-content-center'>
          <img src={mandiri1} alt='mandiri' style={{ width:'90px', height:'42px' }} />
        </div>
        <div>An. Rahmad Ramdhani</div>
        <div>{rekMandiri}</div>
        <button
          type='button'
          onClick={() => {navigator.clipboard.writeText(rekMandiri)}}
          className='btn btn-success btn-block mt-2'
        >Copy No. Rekening</button>
      </div>

      <div className='bank-wrapper shadow-lg p-3 mb-4 bg-white rounded'>
        <div className='d-flex align-items-center justify-content-center'>
          <img src={BCA} alt='mandiri' style={{ width:'62px', height:'26px', marginBottom: '8px' }} />
        </div>
        <div>An. Rahmad Ramdhani</div>
        <div>{rekBca}</div>
        <button
          type='button'
          onClick={() => {navigator.clipboard.writeText(rekBca)}}
          className='btn btn-success btn-block mt-2'
        >Copy No. Rekening</button>
      </div>
    </div>
  );
}

export default Fourth;
