import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import ColorSystem from './components/ColorSystem';
import Home from './pages/Home/Home';

const root = createRoot(document.getElementById('root')!);

root.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} >
                    <Route path='/' element={<Home />} />
                    <Route path='Components' element={<Home />} />
                    <Route path='ThemeData' element={<ColorSystem />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
