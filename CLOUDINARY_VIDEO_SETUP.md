# Cloudinary Video Upload Preset Setup

## Instructions for Admin

**Go to Cloudinary Dashboard:**
https://cloudinary.com/console

### Create Video Upload Preset

1. Click **Settings** (gear icon) → **Upload**
2. Scroll to **Upload presets**
3. Click **Add upload preset**

4. **Configure:**
   - **Preset name:** `course_videos`
   - **Signing mode:** **Unsigned** ✅
   - **Folder:** `education-platform/videos`
   - **Resource type:** `Video` ✅
   - **Access mode:** `Public`

5. **Optional Settings:**
   - **Eager transformations:** Add video quality variants
     - `q_auto` (auto quality)
     - `w_1280,h_720` (HD)
   - **Format:** `mp4`

6. Click **Save**

### Add to .env

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=course_thumbnails
```

The video upload will use the hardcoded `course_videos` preset.

---

## ✅ Ready!

Your Cloudinary account is now configured to accept video uploads from the lesson editor.
