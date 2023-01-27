import * as dotenv from "dotenv";
import aws, { S3 } from "aws-sdk";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

dotenv.config();
const globalForS3Client = global as unknown as { s3Client: S3Client };

const s3 =
	globalForS3Client.s3Client ||
	new S3Client({
		credentials: {
			accessKeyId: process.env.S3_ACCESS_KEY || "",
			secretAccessKey: process.env.S3_ACCESS_SECRET || "",
		},
		region: process.env.REGION || "",
	});

globalForS3Client.s3Client = s3;

export const s3Engine = multerS3({
	acl: "public-read",
	s3,
	bucket: process.env.BUCKET_NAME || "",
	metadata: function (req, file, cb) {
		cb(null, { fieldName: "TESTING_METADATA" });
	},
	key: function (req, file, cb) {
		cb(null, Date.now() + "_" + file.originalname);
	},
});
