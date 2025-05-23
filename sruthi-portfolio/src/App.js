import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const[professionalData,setProfessionalData] = useState(null);

  useEffect (()=>{
    fetch('./files/professionalSummary.txt')
    .then((res)=> res.text())
    .then((text)=>setProfessionalData(text))
    .catch((err)=> console.log("err"+err))
  },[]);

  return (
    <div className="App">
       <header>
        <h1>My Portfolio</h1>
      </header>
      <section>
        <h2>About Me</h2>
        <p>{professionalData}</p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Project 1 - <a href="#">GitHub Link</a></li>
          <li>Project 2 - <a href="#">GitHub Link</a></li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Email: you@example.com</p>
      </section>
    </div>
  );
}

export default App;
