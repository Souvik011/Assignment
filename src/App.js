import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Drawer/SideBar';
import Create from './Drawer/Pages/Create';
import NavBar from './Pages/NavBar';
import Footer from './Pages/Footer';
import Items from './Drawer/Pages/Items';


const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Sidebar>
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/items' element={<Items />} />
        </Routes>
      </Sidebar>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
