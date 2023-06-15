
import './App.css';
import Books from './components/Books';
import Favourites from './components/Favourites';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ContextValue from './Context/Appcontext';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <div className="App">
      <ContextValue>
      <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route  path='/' element={ <Books/>}/>
    <Route  path='/books/:id' element={ <BookDetails/>}/>
    <Route path='/favourites' element={<Favourites/>} />

    
  </Routes>
  <Footer/>

    
  </BrowserRouter>
  </ContextValue>
  </div>
  
  );
}

export default App;
