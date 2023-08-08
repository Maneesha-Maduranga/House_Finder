import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

//Pages
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PropertyDetail from './pages/PropertyDetailPage.jsx';

//Auth Pages
import SigninPage from './pages/Auth/SigninPage.jsx';
import SignupPage from './pages/Auth/SignupPage.jsx';

//User Pages
import DashBoardPage from './pages/User/DashboardPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/property' element={<PropertyPage />} />
      <Route path='/property/:id' element={<PropertyDetail />} />
      <Route path='/signin' element={<SigninPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/dashboard' element={<DashBoardPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
