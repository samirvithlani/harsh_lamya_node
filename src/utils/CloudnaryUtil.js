const cloudnary = require("cloudinary").v2;

const uploadFileinCloudnary = async (file) => {
  cloudnary.config({
    cloud_name: "",
    api_key: "",
    api_secret: "",
  });

  const response = await cloudnary.uploader.upload(file);

  return response;
};
module.exports=uploadFileinCloudnary