import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import BasePage from '../pages/BasePage';
import ListPage from '../pages/ListPage';
import MainPage from '../pages/MainPage/MainPage';

export default function AppRouter(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<MainPage />} />
          <Route path='shoplist/:id' element={<ListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}