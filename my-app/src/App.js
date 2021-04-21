import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Research from './components/Research/Research';
import Tools from './components/Tools/Tools';
import Tool from './components/Tools/Tool';
import About from './components/About/About';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home/>}/>
        <Route path="/research" render={() => <Research/>}/>
        <Route path="/tools" render={() => <Tools/>}/>
        <Route path="/tool/:toolid" render={() => <Tool/>}/>
        <Route path="/about" render={() => <About/>}/>
      </Switch>
    </div>
  );
}

export default App;