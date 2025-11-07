{/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './index.css'

import PageNotFound from './components/ReactRouter/PageNotFound.tsx'
import About from './components/ReactRouter/About.tsx'
import Offer from './components/ReactRouter/Offer.tsx'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <PageNotFound/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/offer',
    element: <Offer/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);*/}


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

{/*
  import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/ReactRouter/Home";
import About from "./components/ReactRouter/About";
import Offer from "./components/ReactRouter/Offer";
import PageNotFound from "./components/ReactRouter/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

  */}