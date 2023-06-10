
import './App.css';
import SearchEngine from './SearchEngine';

function App() {
  return (
    <div className="App">
      <h1> Weather App </h1>
      <SearchEngine />
      <footer>this is an  <a href='https://github.com/Maryam-akhlaghi/weather-react' className='footer-link' target='_blank' rel="noreferrer">Open-Sourced code</a> by <a href='https://www.linkedin.com/in/maryam-akhlaghi-03158276/' className='footer-link' target='_blank' rel="noreferrer"> Maryam Akhlaghi</a></footer>
    </div>
  );
}

export default App;
