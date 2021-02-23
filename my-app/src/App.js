import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home/Home"
import Research from "./components/Research"
import Tools from "./components/Tools/Tools"
import About from "./components/About/About"
import {BrowserRouter as Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Home/>}/>
        <Route path="/research" render={(props) => <Research/>}/>
        <Route path="/tools" render={(props) => <Tools/>}/>
        <Route path="/about" render={(props) => <About/>}/>
      </Switch>
    </div>
  );
}

export default App;
