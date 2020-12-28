import socketIOClient from "socket.io-client";

const socket = socketIOClient('http://localhost:5000', {transports: [ 'websocket', 'polling' ]})

export default socket
