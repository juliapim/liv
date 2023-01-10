import logo from './images/logoLIV.png';
import './App.css';
import { ViewSwitch } from "./componentes/Countdown/ViewSwitch"

function App() {
  return (
    <div className="App">
         <img src={logo} className="App-logo" alt="logo" />
      <section className="App-container">
      <ViewSwitch/>
      </section>
      <section className="App-container2">
        
      </section>
    </div>
  );
}

export default App;
