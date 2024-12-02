import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import SigninPage from './components/SigninPage';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SigninPage/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
