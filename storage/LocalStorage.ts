import multer from "multer";

// middleware that process files uploaded in multipart/form-data format.
const upload = multer({
	storage: multer.diskStorage({
		destination: "./public/uploads",
		filename: (req, file, cb) => cb(null, file.originalname),
	}),
});

export const localStorageEngine = multer.diskStorage({
	destination: "./public/uploads",
	filename: (req, file, cb) => cb(null, file.originalname),
});
