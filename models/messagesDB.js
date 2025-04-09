export const messages = [];

export const getMessageById = (messageId) => {
  return messages.find((message) => message.id === messageId);
};
