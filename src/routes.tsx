import { RouteObject } from 'react-router-dom';
import { ChatPage } from './pages/ChatPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <ChatPage />,
  },
];
