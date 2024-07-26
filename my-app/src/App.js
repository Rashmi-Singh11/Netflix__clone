
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

import Row from './components/Row';
import requests from './request';
function App() {
  return (
    <div className="app">
    <Navbar/>
    <Banner/>

      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}  isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
  
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
