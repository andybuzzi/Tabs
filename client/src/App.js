import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './assets/images/goldkey.png';
import "./App.css";
// import backgroundVideo from "./assets/backgroundVideo";
import Background from "./components/Background";
<<<<<<< HEAD
//import Login from "./components/Login";
=======
// import Login from "./components/Login";
>>>>>>> 3233ef326f19ea9c5917fcd23238789e2f0edcfa
// import './assets/backgroundVideo/index';
//import backgroundVideo from './assets/backgroundVideo/index';
import Cards from "./components/Cards/index";

function App() {
  return (
    <Container fluid>
      <Cards />
      {/* <Background></Background>
      <p>Intro here</p>
      <a className="App-link" href="" target="_blank" rel="noopener noreferrer">
        Register
      </a>

      <a className="App-link" href="" target="_blank" rel="noopener noreferrer">
        Sign Up
      </a> */}
    </Container>
  );
}

export default App;
