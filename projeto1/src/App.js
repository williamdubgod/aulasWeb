import {BrowserRouter, Route, Routes} from 'react-router-dom'
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
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
