function createSocket() {
  const socket = new WebSocket('ws://localhost:5000/cable');
  socket.onopen = function(event) {
    console.log('WebSocket Client Connected');
    // var id = Math.random().toString(10)
    const msg = {
      command: 'subscribe',
      identifier: JSON.stringify({
        id: 1,
        channel: 'DrawChannel'
      })
    };
    sendSocketMessage(msg, socket);
  };

  socket.onmessage = function (event) {
    // console.log("Recieved data from server", event.data);
  };

  socket.onclose = function (event) {
    socket.close();
    console.log('WebSocket Client Disconnected');
  };

  socket.onerror = function (error) {
    console.log("WebSocket error observed: ", error);
  };

  return socket;
}

function sendSocketMessage(message, socket) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  } else {
    console.log('WebSocket not open. Message not sent.');
  }
}

export default createSocket;