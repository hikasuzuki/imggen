function generateUniqueImage() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 640;
    canvas.height = 640;
  
    const timestamp = new Date().getTime();
    const seed = timestamp % 1000000; // Limit the seed to a reasonable range
  
    // Randomize the background color
    const bgColor = `hsl(${seed % 360}, 50%, 50%)`;
    context.fillStyle = bgColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Randomize shapes and their properties
    const numShapes = (seed % 5) + 5;
    for (let i = 0; i < numShapes; i++) {
      const shapeColor = `hsl(${(seed * (i + 1)) % 360}, 50%, 50%)`;
      context.fillStyle = shapeColor;
      const x = (seed * (i + 1)) % canvas.width;
      const y = (seed * (i + 2)) % canvas.height;
      const width = (seed * (i + 3)) % 100;
      const height = (seed * (i + 4)) % 100;
  
      if (i % 2 === 0) {
        context.fillRect(x, y, width, height);
      } else {
        context.beginPath();
        context.arc(x, y, width / 2, 0, 2 * Math.PI);
        context.fill();
      }
    }
  
    return canvas.toDataURL(); // Convert the canvas to a data URL
}
  
  const imageElement = document.getElementById('unique-image');
  
  function updateImage() {
    const uniqueImage = generateUniqueImage();
    imageElement.src = uniqueImage;
  }
  
  updateImage();
  setInterval(updateImage, 1000); // Update the image every second
  