import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './api/AuthContext';
import AppRouters from "./Components/AppRouters";
import './scss/style.scss'

function App() {
  return (
      <BrowserRouter>
          <AuthProvider>
              <AppRouters />
          </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
