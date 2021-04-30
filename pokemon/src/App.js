import React, { useState , useEffect}from'react'
import './App.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const defaultProps = {
  bgcolor: 'background.paper',
  m: 3,
  border: 4,
  style: { width: '10rem', height: '10rem' },
};


 
function App(){
  const [pokemon, setPokemon] = useState({})
  const [numero, setNumero] = useState({
    num: ''
  })

  useEffect(() =>{
    fetch('https://pokeapi.co/api/v2/pokemon/' + numero.num)
      .then (res => res.json ())
      .then (data => setPokemon(data))
  }, [numero])

  const numHandler=(event)=>{
    setNumero({...numero, num: event.target.value})
  }

  

  return (
    <div className="App">
      <Grid container>
      <Box
        boxShadow={4}
        bgcolor="gray"
        m={1}
        p={1}
        style={{ width: '8rem', height: '2rem' }}
      >
        {pokemon.name}
      </Box>
      <Box
        boxShadow={4}
        bgcolor="gray"
        m={1}
        p={1}
        style={{ width: '10rem', height: '2rem' }}
      >
        <input placeholder="Numero" type="text" onChange={(event) => numHandler(event)}/> 
      </Box>
      </Grid>     
    </div>
  );
}

export default App;