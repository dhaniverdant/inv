import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import '../Assets/Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Footer from './Footer';

function Landing() {
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const showHeader = open ?
    <div className='section-wrapper'>
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />
    </div> :
    <header className="App-header">
      <div className='intro'>Undangan Pernikahan</div>
      <div className='our-name'>Rizkia & Arif</div>
      <div className='to-intro'>Kepada Yth.</div>
      <div className='receiver-name'>{id}</div>
      <button style={{ marginTop: "14px" }} className='btn btn-outline-light' onClick={() => setOpen(true)}>Buka Undangan</button>
    </header>;

  return (
    <div className="App">
      {showHeader}
    </div>
  );
}

export default Landing;
