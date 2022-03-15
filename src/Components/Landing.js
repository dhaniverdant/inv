import React, { useState } from 'react';
import '../Asssets/Styles/App.css';
import Second from './Second';
import Third from './Third';
import {
  useParams
} from "react-router-dom";
import Footer from './Footer';

function Landing() {
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const showHeader = open ? <div><Second />
    <Third />
    <Footer /></div> : <header className="App-header">
    <div>This is Inv to:</div>
    <div>{id}</div>
    <button onClick={() => setOpen(true)}>open</button>
  </header>;

  return (
    <div className="App">
      {showHeader}
    </div>
  );
}

export default Landing;
