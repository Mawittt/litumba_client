import multer from "multer";
import { localStorageEngine } from "./LocalStorage";
import { s3Engine } from "./S3Storage";

const imageValidator = function (req: any, file: any, cb: any) {
	// Accept images only
	if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|svg|SVG|MP4|mp4|MOV|mov|AVI|avi|WMV|Wmv|wmv)$/)) {
		req.fileValidationError = "Only image files are allowed!";
		return cb(new Error("Only image files are allowed!"), false);
	}
	cb(null, true);
};

const upload = multer({
	storage: localStorageEngine,
	fileFilter: imageValidator,
});

export function storageEngine() {
	return upload.fields([
		{ name: "profileImage" },
		{ name: "postImage" },
		{ name: "postVideo" },
		{ name: "coverImage" },
		{ name: "logo" },
		{ name: "coverImage" },
		{ name: "previews" },
		{ name: "preview" },
		{ name: "cover" },
	]);
}
