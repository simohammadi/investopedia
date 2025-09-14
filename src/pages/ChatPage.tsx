import React, { useState } from 'react';
import { Chat } from '../components/Chat';
import { Analysis } from '../components/Analysis';
import { HalfPage } from '../components/HalfPage';

interface MessageData {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  imageUrl?: string;
}

export const ChatPage: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<MessageData | null>(null);
  const [allMessages, setAllMessages] = useState<MessageData[]>([]);

  return (
    <HalfPage 
      leftPage={<Chat onMessageSelect={setSelectedMessage} onMessagesChange={setAllMessages} />} 
      rightPage={<Analysis selectedMessage={selectedMessage} allMessages={allMessages} />} 
      flex={[1, 1]} 
    />
  );
};
