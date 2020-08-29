export const matchUrlRegex = value => {
  return window.location.pathname.search(`^${value}$`) >= 0;
};

export const checkImageExists = imageUrl => {
  return new Promise((resolve, reject) => {
    const imageData = new Image();
    imageData.onload = resolve;
    imageData.onerror = reject;
    imageData.src = imageUrl;
  });
};

export const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = error => {
      reject(error);
    };
  });
};

export default {
  matchUrlRegex,
  checkImageExists,
  getBase64
};
