import { RouteObject } from 'react-router-dom';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { PostCheckout } from './pages/PostCheckout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/post-checkout',
    element: <PostCheckout />,
  },
];
