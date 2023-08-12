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

//Redux
import { store } from './store';
import { Provider } from 'react-redux';

//Toast
import { Toaster } from 'react-hot-toast';

//Layput
import PrivateLayout from './layout/PrivateLayout.jsx';

//Pages
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage.jsx';
import PropertyDetail from './pages/PropertyDetailPage.jsx';

//Auth Pages
import SigninPage from './pages/Auth/SigninPage.jsx';
import SignupPage from './pages/Auth/SignupPage.jsx';
import VerifyemailPage from './pages/Auth/VerifyemailPage.jsx';
import ForgetPasswordPage from './pages/Auth/ForgetPasswordPage.jsx';
import ResetPasswordPage from './pages/Auth/ResetPasswordPage.jsx';

//User Pages
import DashBoardPage from './pages/User/DashboardPage.jsx';
import AddPropertyPage from './pages/User/AddPropertyPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<HomePage />} />
      <Route path='/property' element={<PropertyPage />} />
      <Route path='/property/:id' element={<PropertyDetail />} />
      <Route path='/signin' element={<SigninPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/verify-email' element={<VerifyemailPage />} />
      <Route path='/forgot-password' element={<ForgetPasswordPage />} />
      <Route path='/reset-password' element={<ResetPasswordPage />} />
      <Route path='' element={<PrivateLayout />}>
        <Route path='/dashboard' element={<DashBoardPage />} />
        <Route path='/add-property' element={<AddPropertyPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Toaster position='top-center' reverseOrder={false} />
    <RouterProvider router={router} />
  </Provider>
);
