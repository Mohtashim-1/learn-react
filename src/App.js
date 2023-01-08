import './App.css'
import Header from './Components/Header'
import Movies from './Components/Movies'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Movies />
        <Movies />
        <Movies />
        <Movies />
        <Movies />
      </div>
    </div>
  )
}

export default App
