const path = require("path");
const express = require("express");
const multer = require("multer");
const router = express.Router();
const sharp = require("sharp");
const fs = require("fs");
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/", upload.single("image"), async (req, res) => {
  let resizedFile = "";
  try {
    console.log(req.file);
    // const fl = req.file.path;
    console.log(req.file, "req.file.");
    const metadata = await sharp(req.file.path).resize({
      width: 960,
      height: 1280,
    });
    resizedFile = `${req.file.destination}resized-${req.file.filename}`;
    metadata.toFile(resizedFile, (err, info) => {
      if (err) {
        console.log(err, "error");
      } else {
        console.log(info, "info");
        fs.unlink(req.file.path, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("Original file deleted");
        });
      }
    });

    // console.log(metadata);
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }

  res.send(`/${resizedFile}`);
});

module.exports = router;
