import React from 'react';
import { AppLayout } from './Layout'
import { RouterProvider } from './providers/router-provider'
import { Router } from '../pages/router'
import { CustomThemeProvider } from './providers/theme-provider'

import './App.css';

function App() {
  return (
      <CustomThemeProvider>
        <RouterProvider>
          <AppLayout>
            <Router />
          </AppLayout>
        </RouterProvider>
      </CustomThemeProvider>
  )
};
export default App;