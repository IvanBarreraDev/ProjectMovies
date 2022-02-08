import { useContext } from 'react';
import './App.css';
import { pelicontext } from "./Context/Peliculas";
import BarraPeli from './Components/BarraPeli';

function App() {
  const {movies}= useContext(pelicontext)
  console.log(movies)
  return (
    <div className="App">
      {movies.map((movie) => <BarraPeli titulo={movie.Titulo} descripcion={movie.descripcion} img={movie.img} /> )}
    </div>
  );
}

export default App;
