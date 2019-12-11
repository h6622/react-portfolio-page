import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const StyledCanvas = styled.canvas`
  position: absolute;
  background-color: pink;
  width: 100%;
  height: 100%;
`;

const Canvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvasCtx = canvasRef.current.getContext("2d");
    canvasCtx.fillStyle = "red";
    canvasCtx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    canvasRef.current.addEventListener("mousemove", e => {
      const mousePos = getPos(e.clientX, e.clientY);
      drawDot(mousePos.x, mousePos.y);
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

  return (
    <>
      <StyledCanvas ref={canvasRef} />
    </>
  );
};

export default Canvas;
