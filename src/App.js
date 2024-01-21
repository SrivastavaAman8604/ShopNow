import './App.css';
import Checkout from './Component/Checkout.jsx';
import Header from './Component/Header';
import Home from './Component/Home.jsx';
import Footer from './Component/Footer.jsx';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom' 
import Signin from './Component/Signin.jsx';
import Login from './Component/Login.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<Signin/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;