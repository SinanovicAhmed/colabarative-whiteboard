export const savCanvasAsImage = (canvasRef) => {
  const canvas = canvasRef.current;
  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = "canvas_image.png";
  link.click();

  URL.revokeObjectURL(link.href);
  link.remove();
};
