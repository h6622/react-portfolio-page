import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Styled = styled.div`
  canvas {
    position: absolute;
    image-rendering: pixelated;
  }
`;

const Canvas = props => {
  const canvasRef = useRef();

  const introduce = [
    "Hello",
    "I'm Sung Hyun Hong.",
    "I'm a full-stack web developer"
  ];

  useEffect(() => {
    const canvasCtx = canvasRef.current.getContext("2d");

    const scaleX = props.width / canvasRef.current.width;
    const scaleY = props.height / canvasRef.current.height;

    const scaleToFit = Math.min(scaleX, scaleY);
    const scaleToCover = Math.max(scaleX, scaleY);

    const filledText = (startX, startY) => {
      for (let i = 0; i < 3; i++) {
        canvasCtx.fillText(introduce[i], startX, startY + 15 * i);
      }
    };

    canvasRef.current.style.transformOrigin = "0 0";
    canvasRef.current.style.transform =
      "scale(" + scaleToFit + ", " + scaleToCover + ")";

    if (props.width > 768) {
      canvasCtx.font = "1em serif";
    } else {
      canvasCtx.font = ".7em serif";
    }
    canvasCtx.textBaseline = "middle";

    // for (let i = 0; i < 3; i++) {
    //   canvasCtx.fillText(filledText[i], 10 * 5, 25 + 15 * i);
    // }

    // canvasCtx.fillText(filledText[0], 10 * 5, 26 + 50);
    // canvasCtx.fillText(filledText[1], 10 * 5, 39 + 50);
    // canvasCtx.fillText(filledText[2], 10 * 5, 52 + 50);

    filledText(50, 10);

    for (let i = 0; i < canvasRef.current.width; i++) {
      for (let j = 0; j < canvasRef.current.height; j++) {
        canvasCtx.fillStyle =
          "rgba(" +
          Math.floor(0 + 20 * i) +
          "," +
          Math.floor(255 - 20 * j) +
          ",255,  .6)";
        canvasCtx.fillRect(j * 10, i * 10, 10, 10);
      }

      canvasCtx.fillStyle = "rgb(0,0,0)";

      filledText(50, 60);
      filledText(50, 110);
    }
    canvasRef.current.addEventListener("mousemove", e => {
      const mousePos = getPos(e.clientX, e.clientY);
      const leftBut = detectLeftButton(e);
      if (leftBut == 1) {
        drawDot(mousePos.x, mousePos.y);
      }
    });
    canvasRef.current.addEventListener("touchmove", e => {
      e.preventDefault();
      e.stopPropagation();
      const touch = e.targetTouches[0];
      if (touch) {
        const touchPos = getPos(touch.clientX, touch.clientY);
        drawDot(touchPos.x, touchPos.y);
      }
    });
  });

  const getPos = (xRef, yRef) => {
    const canvasRect = canvasRef.current.getBoundingClientRect();
    return {
      x: Math.floor(
        ((xRef - canvasRect.left) / (canvasRect.right - canvasRect.left)) *
          canvasRef.current.width
      ),
      y: Math.floor(
        ((yRef - canvasRect.top) / (canvasRect.bottom - canvasRect.top)) *
          canvasRef.current.height
      )
    };
  };

  const drawDot = (inputX, inputY) => {
    const canvasCtx = canvasRef.current.getContext("2d");
    canvasCtx.beginPath();
    canvasCtx.arc(inputX, inputY, 20, 0, 2 * Math.PI, true);
    canvasCtx.filltyle = "#000";
    canvasCtx.globalCompositeOperation = "destination-out";
    canvasCtx.fill();
  };

  const detectLeftButton = e => {
    if ("buttons" in e) {
      return e.buttons === 1;
    } else if ("which" in e) {
      return e.which === 1;
    } else {
      return e.button === 1;
    }
  };

  return (
    <>
      <Styled>
        <canvas ref={canvasRef}></canvas>
      </Styled>
    </>
  );
};

export default Canvas;
