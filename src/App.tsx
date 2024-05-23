import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home/Home';
import CatalogHome from './Pages/catalog/catalogHome';
import CatalogItemPage from './Pages/catalog/catalogItemPage/CatalogItemPage';
import EachItemCatalog from './Pages/catalog/catalogItemPage/eachItem/EachItemCatalog';

function App() {
  return (
    <div className="App">
  <Routes>
  <Route  path="/" element={<Home/>}/>
  <Route  path="/catalog" element={<CatalogHome/>}/>
  <Route  path="/catalog-item" element={<CatalogItemPage/>}/>
  <Route  path="/catalog-item/item" element={<EachItemCatalog/>}/>

  </Routes>
    </div>
  );
}

export default App;
