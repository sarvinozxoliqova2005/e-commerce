import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePages from './pages/home/HomePages'
import MenuPages from './pages/menu/MenuPages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<HomePages/>}/>
          <Route path='menus' element={<MenuPages/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App