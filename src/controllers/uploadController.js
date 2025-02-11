const multer = require("multer");
const uploadFileinCloudnary = require("../utils/CloudnaryUtil");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  //fileFilter:
}).single("profilepic");

const uploadFile = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(500).json({
        message: "error while uploading file..",
      });
    } else {
      //file upload done...
      //db logic
      //cloud...

      const cloudnaryResponse = await uploadFileinCloudnary(req.file.path);
      res.status(201).json({
        message:
          "file " + req.file.originalname + " is uploaded successfully..",
        data: req.file,
        cloundanryresponse: cloudnaryResponse,
      });
    }
  });
};

module.exports = {
  uploadFile,
};
