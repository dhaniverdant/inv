import './App.css';
import Second from './Second';
import Third from './Third';
import {
  useParams
} from "react-router-dom";
import Footer from './Footer';

function Landing() {
  let {id} = useParams();

  return (
    <div className="App">
      <header className="App-header">
        <div>This is Inv to:</div>
        <div>{id}</div>
        <button onClick={() => window.location.replace("/#second")}>open</button>
      </header>
      <Second />
      <Third />
      <Footer />
    </div>
  );
}

export default Landing;
