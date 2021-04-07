import "./App.css";

import DevProfile from "./components/DevProfile/DevProfile";

import Fondo from './components/DevProfile/Recursos/Fondo.jpg';


function App() {
  return (
  <body className="Background">
    <div className="App">

      { <DevProfile/>}
    </div>
  </body>
  );
}

export default App;
