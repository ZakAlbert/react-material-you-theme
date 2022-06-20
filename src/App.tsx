
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ColorSystem from './components/ColorSystem';

import Layout from './layout/Layout';
import RootLayout from './layout/RootLayout';
import ComponentPage from './pages/Components/Components';
import Home from './pages/Home/Home';



const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />} >
          <Route path="/Components" element={<ComponentPage />}></Route>
          <Route path="/Theme" element={<ColorSystem />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App