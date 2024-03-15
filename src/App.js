import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import Dot from './components/Dot';
function App() {
  return (
    <div className="App w-100">
      <div className="w-auto boxCenter mx-auto">a</div>
      <div id="fadeBlockL"></div>
        <div className="area">
          <Dot num="1"></Dot>
          <Dot></Dot>
          <Dot></Dot>
        </div>
        <div id="fadeBlockR"></div>
    </div>
  );
}

export default App;
