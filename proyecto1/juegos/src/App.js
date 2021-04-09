import './App.css';

import Juegos from "./components/Juegos/Juegos";

const juegos =[
  {
    nombre: "Final Fantasy VIII",
    fecha: "11-02-1999",
    genero: "JRPG",
  },
  {
    nombre: "Super Mario Odyssey",
    fecha: "27-10-2017",
    genero: "Plataforma",
  },
];


function App() {
  return (
    <div className="App">
      {
        juegos.map((juego) => {
          return <Juegos
                  game={juego.nombre}
                  age={juego.fecha}
                  genres={juego.genero}
                  />
        })
      }
    </div>
  );
}

export default App;
