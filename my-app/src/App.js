import logo from './images/logoLIV.png';
import teabag from './images/teabag.png';
import himmpowder from './images/himmpowder.png';
import './App.css';
import { ViewSwitch } from "./componentes/Countdown/ViewSwitch"

function App() {
  return (
    <div className="App">
         <img src={logo} className="App-logo" alt="logo" />
         <section className="App-container2">
          <h1>Loren ipsum loren lorem latin manes luinpal </h1>
         </section>
         <section className="App-container">
          <div>
          <img className="teacards" src={teabag}/>
          <img className="teacards" src={himmpowder}/>
        <img className="teacards" src={teabag}/>
        <img className="teacards" src={teabag}/>
          </div>
       
        </section>
        <section className="App-container3">
         <ViewSwitch/>
        </section>
       
    </div>
  );
}

export default App;
