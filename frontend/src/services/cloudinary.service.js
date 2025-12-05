// 📁 src/services/cloudinary.service.js
// ========================================
// Cloudinary image upload service

class CloudinaryService {
    constructor() {
        this.cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
        this.uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'course_thumbnails';

        // Debug: Log configuration on initialization
        console.log('🔧 Cloudinary Config:', {
            cloudName: this.cloudName,
            uploadPreset: this.uploadPreset
        });

        if (!this.cloudName) {
            console.error('❌ VITE_CLOUDINARY_CLOUD_NAME is not set! Check your .env file');
        }
    }

    /**
     * Upload image to Cloudinary
     * @param {File} file - Image file to upload
     * @param {string} folder - Optional folder name in Cloudinary
     * @returns {Promise<{success: boolean, url?: string, error?: string}>}
     */
    async uploadImage(file, folder = 'courses') {
        try {
            // Create form data
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', this.uploadPreset);
            formData.append('folder', folder);

            // Upload to Cloudinary
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`,
                {
                    method: 'POST',
                    body: formData
                }
            );

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error?.message || 'Upload failed');
            }

            const data = await response.json();

            console.log('✅ Image uploaded to Cloudinary:', data.secure_url);

            return {
                success: true,
                url: data.secure_url,
                publicId: data.public_id
            };
        } catch (error) {
            console.error('❌ Cloudinary upload error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Upload video to Cloudinary
     * @param {File} file - Video file to upload
     * @param {string} folder - Optional folder name in Cloudinary
     * @param {function} onProgress - Optional progress callback
     * @returns {Promise<{success: boolean, url?: string, duration?: number, error?: string}>}
     */
    async uploadVideo(file, folder = 'courses/videos', onProgress) {
        try {
            // Validate file type
            if (!file.type.startsWith('video/')) {
                throw new Error('File must be a video');
            }

            // Create form data
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'course_videos'); // Video-specific preset
            formData.append('folder', folder);
            formData.append('resource_type', 'video'); // Important for videos

            console.log('📹 Uploading video to Cloudinary...');

            // Upload to Cloudinary with XHR for progress tracking
            const response = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();

                xhr.upload.addEventListener('progress', (e) => {
                    if (e.lengthComputable && onProgress) {
                        const percentComplete = Math.round((e.loaded / e.total) * 100);
                        onProgress(percentComplete);
                    }
                });

                xhr.addEventListener('load', () => {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(new Error(xhr.statusText));
                    }
                });

                xhr.addEventListener('error', () => reject(new Error('Upload failed')));

                xhr.open('POST', `https://api.cloudinary.com/v1_1/${this.cloudName}/video/upload`);
                xhr.send(formData);
            });

            console.log('✅ Video uploaded to Cloudinary:', response.secure_url);

            return {
                success: true,
                url: response.secure_url,
                publicId: response.public_id,
                duration: response.duration, // Video duration in seconds
                format: response.format
            };
        } catch (error) {
            console.error('❌ Cloudinary video upload error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Delete image from Cloudinary
     * @param {string} publicId - Cloudinary public ID
     * @returns {Promise<{success: boolean, error?: string}>}
     */
    async deleteImage(publicId) {
        try {
            // Note: Deleting requires server-side implementation with API secret
            // For now, we'll just return success
            // You can implement this in your backend if needed
            console.log('⚠️ Image deletion not implemented (requires server-side)');
            return { success: true };
        } catch (error) {
            console.error('❌ Cloudinary delete error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Get optimized image URL
     * @param {string} url - Original Cloudinary URL
     * @param {object} options - Transformation options
     * @returns {string} Optimized URL
     */
    getOptimizedUrl(url, options = {}) {
        const {
            width = 800,
            height = 600,
            quality = 'auto',
            format = 'auto'
        } = options;

        // If not a Cloudinary URL, return as is
        if (!url || !url.includes('cloudinary.com')) {
            return url;
        }

        // Insert transformations into URL
        const transformations = `w_${width},h_${height},c_fill,q_${quality},f_${format}`;
        return url.replace('/upload/', `/upload/${transformations}/`);
    }
}

export default new CloudinaryService();
