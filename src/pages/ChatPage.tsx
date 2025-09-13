import React from 'react';
import { Chat } from '../components/Chat';
import { Analysis } from '../components/Analysis';
import { HalfPage } from '../components/HalfPage';

export const ChatPage: React.FC = () => {
  return <HalfPage leftPage={<Chat />} rightPage={<Analysis />} flex={[1, 1]} />;
};
