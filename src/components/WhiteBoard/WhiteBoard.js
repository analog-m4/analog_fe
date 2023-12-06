import React, { useEffect } from 'react';
import createSocket from '../utils/websocket';

function WhiteBoard() {
  const socket = createSocket();
  var isDrawing = false
  var lastX = 0
  var lastY = 0
  var lastSent = 0
  var context = null
  var remoteContext = null
  var remoteLastX = 0
  var remoteLastY = 0

  function received(data) {
    console.log("Receiving Message")
    const jsonData = JSON.parse(data.data);
    const message = jsonData.message;
    console.log(message)
    
    if (!message) {
      // console.error('Invalid data received from the server:', data);
      return;
    }

    if (message['state'] === "start" || message['state'] === "stop") {
      console.log("Info data", data)
      remoteLastX = message['x'];
      remoteLastY = message['y'];
      return;
    }

    drawRemoteData(message['x'], message['y']);
  }

  function drawRemoteData(x, y) {
    remoteContext.lineJoin = "round";
    remoteContext.lineCap = "round";
    remoteContext.beginPath();
    remoteContext.moveTo(remoteLastX, remoteLastY);
    remoteContext.lineTo(x, y);
    remoteContext.stroke();
    remoteLastX = x;
    remoteLastY = y;
  }
  
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    // Set up the canvas and event listeners
    context = ctx;
    remoteContext = canvas.getContext('2d');
    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);

    socket.addEventListener('message', received);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mousemove", draw);
      socket.removeEventListener('message', received);
    };

  }, [socket]);

  function startDrawing(event) {
    isDrawing = true;
    console.log("startDrawing called");
    console.log("isDrawing:", isDrawing);
    lastX = event.offsetX;
    lastY = event.offsetY;
    lastSent = Date.now();
    sendDrawData(event.offsetX, event.offsetY, "start");
  }

  function stopDrawing(event) {
    isDrawing = false;
    console.log("stopDrawing called");
    console.log("isDrawing:", isDrawing);
    lastX = event.offsetX;
    lastY = event.offsetY;
    lastSent = Date.now();
    sendDrawData(event.offsetX, event.offsetY, "stop");
  }

  function draw(event) {
    if (!isDrawing) return;
    console.log("drawing");
    console.log("isDrawing:", isDrawing);
    console.log("lastX:", lastX);
    console.log("lastY:", lastY);
    
    // Send the coordinates to the server every 10ms
    // time.now() returns the current time in milliseconds
    if (Date.now() - lastSent > 10) {
      sendDrawData(event.offsetX, event.offsetY, "drawing");
      lastSent = Date.now();
    }
    drawData(event.offsetX, event.offsetY);
  }

  function drawData(x, y) {
    context.lineJoin = "round";
    context.lineCap = "round";
    // start from
    context.beginPath();

    // go to the old position
    context.moveTo(lastX, lastY);
    // go to the new position
    context.lineTo(x, y);
    context.stroke();

    // set the new position as the current one
    lastX = x;
    lastY = y;
  }

  function sendDrawData(x, y, state) {

    const message = {
      command: "message",
      identifier: JSON.stringify({ id: 1, channel: "DrawChannel"}),
      data: JSON.stringify({action: "draw", x, y, state })
    };

      const jsonString = JSON.stringify(message);
      socket.send(jsonString);
  }

  return (
    <div>
      WhiteBoard
      <canvas id="canvas" width="500" height="500"></canvas>
    </div>
  );
    
}
export default WhiteBoard;