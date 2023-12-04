function createSocket() {
  const socket = new WebSocket('ws://localhost:5000/cable');
  socket.onopen = function(event) {
    console.log('WebSocket Client Connected');
    const msg = {
      command: 'subscribe',
      identifier: JSON.stringify({
        id: 1,
        channel: 'DrawChannel',
        room: '1'
      })
    };
    this.listenToCanvas();
    socket.send(JSON.stringify(msg));
  };

  socket.onmessage = function (event) {
    console.log("Recieved data from server", event.data);
  };

  socket.onclose = function (event) {
    console.log('WebSocket Client Disconnected');
  };

  socket.onerror = function (error) {
    console.log("WebSocket error observed: ", error);
  };
}