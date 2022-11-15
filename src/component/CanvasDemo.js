import React from "react";

function CanvasDemo() {
  function draw() {
    var height = document.getElementById("hei").value;
    var width = document.getElementById("wid").value;
    var color = document.getElementById("color").value;

    // console.log({height,width,color});
    var x = 50;
    var y = 50;
    var canvas = document.createElement("canvas");
    // canvas.setAttribute("Width", width);
    // canvas.setAttribute("Height", height);

    //Set canvas drawing area width/height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // canvas.style.position = "absolute";
    // canvas.style.left = 0;
    // canvas.style.top = 0;
    // canvas.style.zIndex = 100000;

    document.body.appendChild(canvas); //Append canvas to body element
    var context = canvas.getContext("2d");
    //Draw rectangle
    context.rect(x, y, width, height);
    context.fillStyle = `${color}`;
    context.fill();
    //Draw circle
    context.beginPath();
  
    context.lineWidth = "4";
    context.strokeStyle = "green";
    context.arc(width / 2, height / 2, 80, 0, 2 * Math.PI);
    context.stroke()
    // console.log(canvas);
  }

  return (
    <div>
      <form id="form">
        Height: <input id="hei" type="number"></input>&nbsp;&nbsp; Width:{" "}
        <input id="wid" type="number"></input>&nbsp;&nbsp; Color:{" "}
        <input id="color" type="text"></input>&nbsp;&nbsp;
        <button onClick={() => draw()} type="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CanvasDemo;
