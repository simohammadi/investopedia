import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { Layout } from './components/Layout';

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
