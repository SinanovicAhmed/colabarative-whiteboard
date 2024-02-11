import { useEffect, useRef, useState } from "react";

export const useDraw = (drawAndEmit) => {
  const [mouseDown, setMouseDown] = useState(false);
  const canvasRef = useRef(null);
  const prevPoint = useRef(null);

  const onMouseDown = () => setMouseDown(true);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      if (!mouseDown) return;
      const currentPoint = pointerCanvasPosition(e);

      const canvasCtx = canvasRef.current?.getContext("2d");
      if (!canvasCtx || !currentPoint) return;

      drawAndEmit(prevPoint.current, currentPoint, canvasCtx);
      prevPoint.current = currentPoint;
    };

    const pointerCanvasPosition = (e) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const canvasRectangle = canvas.getBoundingClientRect();
      const x = e.clientX - canvasRectangle.left;
      const y = e.clientY - canvasRectangle.top;

      return { x, y };
    };

    const mouseUpHandler = () => {
      setMouseDown(false);
      prevPoint.current = null;
    };

    canvasRef.current?.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    return () => {
      canvasRef.current?.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [drawAndEmit, mouseDown]);

  return { canvasRef, onMouseDown, clearCanvas };
};
