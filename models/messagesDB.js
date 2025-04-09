export const messages = [
  {
    user: 'Amando',
    content: 'Hi there!',
    timestamp: new Date(),
    id: '826a6ba9-24a5-46ac-8aec-eda7f3c9bb59',
  },
  {
    user: 'Charles',
    content: 'Hello World!',
    timestamp: new Date(),
    id: 'ee3a9de8-d811-4105-b289-85c2b71f6111',
  },
];

export const getMessageById = (messageId) => {
  return messages.find((message) => message.id === messageId);
};
