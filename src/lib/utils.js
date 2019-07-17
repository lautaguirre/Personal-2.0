export const imagesArrayToBase64 = async (images) => {
  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const base64 = images.map(async image => {
    if (image instanceof File) {
      const base64Data = await getBase64(image);

      return base64Data.split('data:image/png;base64,', 2)[1];
    } else {
      return image;
    }
  });

  const base64Images = await Promise.all(base64);

  return base64Images;
};
