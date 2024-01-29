export function resizeImage(imageDataUrl) {
  // Log the image source to verify if it's being set correctly
  //   console.log("Image source:", image.src);

  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageDataUrl;
    image.crossOrigin = "anonymous";

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.classList.add("hidden");
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const targetSize = 150; // Set the desired size

        canvas.width = targetSize;
        canvas.height = targetSize;

        ctx.drawImage(image, 0, 0, targetSize, targetSize);

        const dataUrl = canvas.toDataURL("image/jpeg");

        resolve(dataUrl);
      } else {
        reject(new Error("Unable to get 2d context from canvas"));
      }
    };

    image.onerror = (error) => {
      reject(error);
    };
  });
}
