import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import createSocket from "../utils/websocket";

function WhiteBoard() {
  const appColor = useSelector((state) => state.appColor.appColor);
  const socket = createSocket();
  var isDrawing = false;
  var lastX = 0;
  var lastY = 0;
  var lastSent = 0;
  var context = null;
  var remoteContext = null;
  var remoteLastX = 0;
  var remoteLastY = 0;
  var isErasing = false;
  const defaultColor = "#000000";
  const backgroundColor = appColor === "light" ? "white" : "#636363";

  function received(data) {
    const jsonData = JSON.parse(data.data);
    const received_message = jsonData.message;

    if (!received_message) {
      return;
    }

    if (
      received_message["state"] === "start" ||
      received_message["state"] === "stop"
    ) {
      remoteLastX = received_message["x"];
      remoteLastY = received_message["y"];
      if (received_message["state"] === "start") {
        remoteContext.strokeStyle = received_message["color"];
        remoteContext.lineWidth = received_message["line"];
      }
      return;
    }

    drawRemoteData(received_message["x"], received_message["y"]);
  }

  function toggleEraser() {
    isErasing = !isErasing;
    context.strokeStyle = isErasing ? backgroundColor : defaultColor;
    context.lineWidth = 25
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
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    context = ctx;
    remoteContext = canvas.getContext("2d");

    function updateCanvasSize() {
      const parent = canvas.parentElement;

      // Set maximum width and height for the canvas
      const maxWidth = 1200;
      const maxHeight = 600;

      // Calculate new width and height based on the parent size
      const newWidth = Math.min(parent.clientWidth, maxWidth);
      const newHeight = Math.min(parent.clientHeight, maxHeight);

      // Set canvas size
      canvas.width = newWidth;
      canvas.height = newHeight;

      ctx.fillStyle = `${appColor === "light" ? "white" : "#636363"}`;
      context.strokeStyle = `${appColor === "light" ? "black" : "white"}`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    updateCanvasSize();

    window.addEventListener("resize", updateCanvasSize);
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);

    socket.addEventListener("message", received);

    document.getElementById('eraserButton').addEventListener('click', toggleEraser);

    return () => {
      window.addEventListener("resize", updateCanvasSize);
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mousemove", draw);
      socket.removeEventListener("message", received);
    };
  }, [socket, appColor]);

  function startDrawing(event) {
    isDrawing = true;
    const canvas = document.getElementById('canvas');
    var mousePos = getMousePos(canvas, event);
  
    if (!isErasing) {
      context.strokeStyle = document.getElementById("colorPicker").value;
      context.lineWidth = document.getElementById("lineSize").value;
    }
  
    lastX = mousePos.x;
    lastY = mousePos.y;
    lastSent = Date.now();
    sendDrawData(mousePos.x, mousePos.y, "start", context.strokeStyle, context.lineWidth);
  }  

  function stopDrawing(event) {
    isDrawing = false;
    const canvas = document.getElementById('canvas');
    var mousePos = getMousePos(canvas, event);
  
    lastX = mousePos.x;
    lastY = mousePos.y;
    lastSent = Date.now();
    sendDrawData(mousePos.x, mousePos.y, "stop");
  }
  

  function draw(event) {
    if (!isDrawing) return;
  
    const canvas = document.getElementById('canvas');
    var mousePos = getMousePos(canvas, event);
  
    if (Date.now() - lastSent > 10) {
      sendDrawData(mousePos.x, mousePos.y, "drawing");
      lastSent = Date.now();
    }
    drawData(mousePos.x, mousePos.y);
  }  

  function drawData(x, y) {
    context.lineJoin = "round";
    context.lineCap = "round";
    context.beginPath();


    context.moveTo(lastX, lastY);

    context.lineTo(x, y);
    context.stroke();

    lastX = x;
    lastY = y;
  }

  function sendDrawData(x, y, state, color = "#000000", line = 1) {
    const message = {
      command: "message",
      identifier: JSON.stringify({ id: 1, channel: "DrawChannel" }),
      data: JSON.stringify({ action: "draw", x, y, state, color, line }),
    };

    const jsonString = JSON.stringify(message);
    socket.send(jsonString);
  }

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(); 
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  return (
    <div className="whiteboard flex flex-col sm:w-11/12 md:w-10/12 pb-5 mt-4 ">
      <div className="whiteboard-title flex font-fjalla text-gray-900 self-start text-2xl ml-1 border-b w-full mb-2 dark:text-white">
        Whiteboard
      </div>
      <div style={{ width: '865px', height: '450px' }}>
        <canvas
          id="canvas"
          width="865"
          height="450"
          className="rounded-2xl border-gray-200 shadow-sm"
          style={{ width: '865px', height: '450px' }}
        ></canvas>
      </div>
      <div>
        <input type="color" id="colorPicker" defaultValue="#000000" />
        <input type="range" id="lineSize" min="1" max="20" defaultValue="1" />
        <button id="eraserButton">Eraser</button>
      </div>
    </div>
  );
  
}
export default WhiteBoard;
