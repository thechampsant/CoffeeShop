import './App.scss';
import HomePage from './Pages/HomePage/HomePage.component'
import Header from './Components/Header/header.component';
import { MenuContext } from './Context/menu.context';
import React, { useContext } from 'react';


function App() {
  const menuList = [
    {
      item_name: 'Cafê Mocha',
      item_price: '350.00',
      item_description: 'abc',
      item_rating: '5.0',
      item_image: '',
    },
    {
      item_name: 'Laté',
      item_price: '250.00',
      item_description: 'abc',
      item_rating: '4.2',
      item_image: '',
    },
    {
      item_name: 'Americano',
      item_price: '150.00',
      item_description: 'abc',
      item_rating: '4.4',
      item_image: '',
    }
  ]

  const {setMenu} = useContext(MenuContext);

  React.useEffect(()=>{
    setMenu(menuList)
  },[])
  return (
    <div className="App">
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
