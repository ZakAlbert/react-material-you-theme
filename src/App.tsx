
import { FC } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ColorSystem from './components/ColorSystem';

import RootLayout from './layout/RootLayout';
import ComponentPage from './pages/Components/Components';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />} >
          <Route index element={<Navigate to="/Components" replace />} />
          <Route path="/Components" element={<ComponentPage />}></Route>
          <Route path="/Theme" element={<ColorSystem />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
