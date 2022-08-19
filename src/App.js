import './App.scss';
import HomePage from './Pages/HomePage/HomePage.component'
import Header from './Components/Header/header.component';

import { Route, Routes } from 'react-router-dom';
import CartPage from './Pages/CartPage/cartpage.component';
import MenuPage from './Pages/MenuPage/menupage.component';
import AboutPage from './Pages/AboutPage/aboutpage.component';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
