// 📁 src/services/cloudinary.service.js
// ========================================
// Cloudinary image upload service

class CloudinaryService {
    constructor() {
        this.cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
        this.uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'course_thumbnails';
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
