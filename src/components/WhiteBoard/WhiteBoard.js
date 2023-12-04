import React, { useEffect } from 'react';

function WhiteBoard() {
  useEffect(() => {
    // Set up the canvas and event listeners
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Call listenToCanvas to set up event listeners
    listenToCanvas(canvas);
  }, []);

  function listenToCanvas(canvas) {
    // Event listeners for canvas drawing
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);
  };

  function startDrawing(event) {
    this.isDrawing = true;
    this.lastX = event.offsetX;
    this.lastY = event.offsetY;
    this.lastSent = Date.now();

    this.perform("draw", {
      x: event.offsetX,
      y: event.offsetY,
      state: "start",
    });
  };

  function stopDrawing(event) {
    this.isDrawing = false;
    this.lastX = event.offsetX;
    this.lastY = event.offsetY;
    this.lastSent = Date.now();

    this.perform("draw", {
      x: event.offsetX,
      y: event.offsetY,
      state: "stop",
    });
  };

  function draw(event) {
    if (!this.isDrawing) return;

    // Send the coordinates to the server every 10ms
    // time.now() returns the current time in milliseconds
    if (Date.now() - this.lastSent > 10) {
      this.perform("draw", {
        x: event.offsetX,
        y: event.offsetY,
        state: "drawing",
      });
      this.lastSent = Date.now();
    }
    this.drawData(event.offsetX, event.offsetY);
  };

  function drawData(x, y) {
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    // start from
    this.context.beginPath();

    // go to the old position
    this.context.moveTo(this.lastX, this.lastY);
    // go to the new position
    this.context.lineTo(x, y);
    this.context.stroke();

    // set the new position as the current one
    this.lastX = x;
    this.lastY = y;
  };

  function drawRemoteData(x, y) {
    this.remoteContext.lineJoin = "round";
    this.remoteContext.lineCap = "round";
    // start from
    this.remoteContext.beginPath();

    // go to the old position
    this.remoteContext.moveTo(this.remoteLastX, this.remoteLastY);
    // go to the new position
    this.remoteContext.lineTo(x, y);
    this.remoteContext.stroke();

    this.remoteLastX = x;
    this.remoteLastY = y;
  };

  function disconnected() {
    // Called when the subscription has been terminated by the server
  };

  function received(data) {
    // Called when there's incoming data on the websocket for this channel
    if (data.state === "start") {
      this.remoteLastX = data.x;
      this.remoteLastY = data.y;
      return;
    }

    if (data.state === "stop") {
      this.remoteLastX = data.x;
      this.remoteLastY = data.y;
      return;
    }

    this.drawRemoteData(data.x, data.y);
  };

  return (
    <div>
      WhiteBoard
      <canvas id="canvas" width="500" height="500"></canvas>
    </div>
  );
}

export default WhiteBoard;
