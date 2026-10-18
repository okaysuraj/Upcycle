const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with env vars
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Upload a file buffer to Cloudinary.
 * @param {Buffer} fileBuffer - The file buffer to upload
 * @param {Object} options - Upload options
 * @param {string} options.folder - Cloudinary folder (e.g., 'upcycle/profiles')
 * @param {string} [options.publicId] - Optional custom public ID
 * @param {string} [options.transformation] - Optional transformation string
 * @returns {Promise<{url: string, publicId: string}>}
 */
const uploadToCloudinary = (fileBuffer, options = {}) => {
  return new Promise((resolve, reject) => {
    const uploadOptions = {
      folder: options.folder || 'upcycle',
      resource_type: 'auto',
      ...(options.publicId && { public_id: options.publicId }),
      ...(options.transformation && { transformation: options.transformation }),
    };

    const uploadStream = cloudinary.uploader.upload_stream(uploadOptions, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          url: result.secure_url,
          publicId: result.public_id,
        });
      }
    });

    uploadStream.end(fileBuffer);
  });
};

/**
 * Generate a signed upload signature for client-side direct uploads.
 * @param {Object} params - Parameters to sign
 * @returns {{ signature: string, timestamp: number, apiKey: string, cloudName: string }}
 */
const generateUploadSignature = (params = {}) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const paramsToSign = {
    timestamp,
    ...params,
  };

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET
  );

  return {
    signature,
    timestamp,
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  };
};

module.exports = {
  cloudinary,
  uploadToCloudinary,
  generateUploadSignature,
};
