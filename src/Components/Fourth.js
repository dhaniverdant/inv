import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Assets/Styles/Fourth.css';
import bsi from '../Assets/Images/bsi.png';

const Fourth = () => {
  const [rekBsi] = useState(7146755466);

  return (
    <div className='fourth-wrapper d-flex flex-column align-items-center'>
      <div className='our-agenda-title'>Amplop Digital</div>
      <div className='bank-wrapper shadow-lg p-3 mb-4 bg-white rounded'>
        <div className='d-flex align-items-center justify-content-center'>
          <img src={bsi} alt='bsi' style={{ width: '50px', height: '42px' }} />
        </div>
        <div>An. Utari Sapta Anugrah</div>
        <div>{rekBsi}</div>
        <button
          type='button'
          onClick={() => { navigator.clipboard.writeText(rekBsi) }}
          className='btn btn-success btn-block mt-2'
        >Copy No. Rekening</button>
      </div>
    </div>
  );
}

export default Fourth;
