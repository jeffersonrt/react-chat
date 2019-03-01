import io from 'socket.io-client';
import env from '../env';

const socket = io(env.SOCKET_URL);

const ReceivedMessage = callback => {
  socket.on('receivedMessage', callback);
};
const SendMessage = message => {
  socket.emit('sendMessage', message);
};

export { ReceivedMessage, SendMessage };
