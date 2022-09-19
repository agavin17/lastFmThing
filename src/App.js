import './App.css';
import Navigation from './components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import MusicBox from './components/musicBox';
import Counter from './components/counter';



function App() {
  return (
    <div className="App">
    {/* <Navigation /> */}
    <header className="App-header">
        <h1>Hello...Enter A Band/Artist Below</h1>
        <MusicBox />
      
      

    </header>
    <div style= {{background:"yellow"}}><Counter /></div> 



    </div>
  );
}

export default App;
