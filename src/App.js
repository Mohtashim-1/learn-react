import { element } from 'prop-types'
import './App.css'
import Header from './Components/Header'
import Movie from './Components/Movie'
import Movies from '../src/Components/movie.json'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {Movies.map((element) => {
          return (
            <Movie
              Title={element.Title}
              Year={element.Year}
              img={element.Poster}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
