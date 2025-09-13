import React from 'react';
import { MemoryRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { Layout } from './components/Layout';

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <MemoryRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </MemoryRouter>
  );
}

export default App;
