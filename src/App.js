import './landingPage.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Latdas from './components/LATDAS';
import Ephotech from './components/EPHOTECH'
import Party from './components/party';


function App() {
  return (
    <div className="App">
      <div className='container-1'>
        <NavigationBar/>
        <Intro/>
      </div>
      <Latdas/>
      <Ephotech/>
      <Party/>
    </div>
  );
}

export default App;
