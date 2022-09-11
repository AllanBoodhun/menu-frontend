import './App.css';
import {BrowserRouter, Switch, Routes, Route} from "react-router-dom"

// import Home from './components/home';
import Home from './components/Home/Home';


function App(){
  
  return (
    <div className='App'>
      {/* <Routes> */}
      <BrowserRouter>
      <Switch>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' component={}/>
        <Route exact path='/signup' component={}/>
      </Switch>
      </BrowserRouter>

      {/* </Routes> */}
    </div>
  );
}

export default App;