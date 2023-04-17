import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Api from './components/Api';
import Contato from './components/Contato';
import Empresa from './components/Empresa';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/empresa' element={<Empresa/>}/>
        <Route path='/Contato' element={<Contato/>}/>
        <Route path='/api' element={<Api/>}/>
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
