"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const uploadDir = path.join(__dirname, '..', 'uploads');
// Ensure the uploads directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
});
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = /\.(pdf|txt|doc|docx|csv|xls|xlsx|jpg|jpeg|png)$/i;
    const allowedMimeTypes = [
        "application/pdf",
        "text/plain",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/csv",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "image/jpeg",
        "image/png",
        "image/jpg"
    ];
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedMimeTypes.includes(file.mimetype);
    if (extname && mimetype) {
        return cb(null, true);
    }
    else {
        const error = new Error("Invalid file type.");
        error.statusCode = 400;
        cb(error);
    }
};
exports.upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
    fileFilter: fileFilter
}).single("file");
module.exports = { upload: exports.upload };
