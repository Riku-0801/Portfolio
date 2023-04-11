import fs from "fs";
import svg2img from "svg2img";
export const imagesPath = "public/tmpImages";

export const saveImageIfNeeded = async (post) => {
  if (!fs.existsSync(imagesPath)) {
    fs.mkdirSync(imagesPath);
  }
  checkImg(post);
};

const checkImg = async (post) => {
  const blob = await getTemporaryImage(post.cover.file.url);
  if (!blob) {
    return "";
  }
  if (!isImageExist(post.id)) {
    const binary = await blob.arrayBuffer();
    const buffer = Buffer.from(binary);
    let imageBuffer;
    if (blob.type === "image/svg+xml") {
      imageBuffer = await new Promise((resolve, reject) => {
        svg2img(buffer, (error, buffer) => {
          if (error) {
            reject(error);
          } else {
            resolve(buffer);
          }
        });
      });
    } else {
      imageBuffer = buffer;
    }
    saveImage(imageBuffer, post.id);
  }
};
const getTemporaryImage = async (url) => {
  try {
    const blob = await fetch(url).then((r) => r.blob());
    return blob;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const isImageExist = (keyName) => {
  return fs.existsSync(imagesPath + "/" + keyName + ".png");
};

const saveImage = (imageBinary, keyName) => {
  fs.writeFile(imagesPath + "/" + keyName + ".png", imageBinary, (error) => {
    if (error) {
      console.log(error);
      throw error;
    }
  });
};
