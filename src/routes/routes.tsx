import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPage from '../pages/ListPage';
import MainPage from '../pages/MainPage/MainPage';

export default function AppRouter(){
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/shoplist/:id' element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}