export const drawLine = (prevPoint, currentPoint, ctx, color) => {
  //console.log("prevPoint:", prevPoint, "|", "currentPoint:", currentPoint);
  const lineColor = color;
  const lineWidth = 5;

  let startPoint = prevPoint ?? currentPoint;
  ctx.beginPath();
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = lineColor;
  ctx.moveTo(startPoint.x, startPoint.y);
  ctx.lineTo(currentPoint.x, currentPoint.y);
  ctx.stroke();

  ctx.fillStyle = lineColor;
  ctx.beginPath();
  ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
  ctx.fill();
};
