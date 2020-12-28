import socketIOClient from "socket.io-client";

const socket = socketIOClient('http://ec2-52-77-249-31.ap-southeast-1.compute.amazonaws.com', {transports: [ 'websocket', 'polling' ]})

export default socket
