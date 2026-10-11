import multer from 'multer';
import createHttpError from "http-errors";
import { User } from "../models/user.js";


export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
	  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
	  
	  if (allowedTypes.includes(file.mimetype)) {
	    cb(null, true)
	  } else {
	    cb(new Error('Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.'), false)
	  }
  },
});

export const updateUserAvatar = async (req, res, next) => {
  if (!req.file) {
    throw createHttpError(400, "No file");
  }

  res.status(200).json({ url: "" });
};
