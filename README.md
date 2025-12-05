# 📚 Educational Platform - E-Learning Platform

A comprehensive online learning platform built with React, Firebase, and Cloudinary.

## 🌟 Features

### For Students
- 📖 Browse and enroll in courses
- 🎥 Watch video lessons (YouTube or Cloudinary-hosted)
- 🧠 Take interactive quizzes with instant feedback
- 💻 Complete progressive coding exercises
- 📊 Track learning progress
- 🏆 View quiz scores and exercise completion
- 👤 Manage profile and enrolled courses

### For Instructors (Admin)
- ➕ Create and manage courses
- 📹 Upload videos via Cloudinary or use YouTube links
- 📝 Create course modules and lessons
- 🧩 Build quizzes with multiple-choice questions
- 🎯 Design progressive exercises with starter code
- 📈 Track student enrollments and progress
- 🖼️ Upload course thumbnails via Cloudinary

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **Tailwind CSS** - Utility-first CSS framework

### Backend & Services
- **Firebase**
  - Firestore - Database
  - Authentication - User management
  - Hosting - Frontend deployment
- **Cloudinary** - Image and video hosting
- **Node.js** - Backend runtime (optional)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- Cloudinary account

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd plateforme-edu
```

### 2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies (Optional)
```bash
cd ../backend
npm install
```

## ⚙️ Configuration

### Frontend Environment Variables

Create `frontend/.env.local` file:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Cloudinary Configuration
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=course_thumbnails
```

### Backend Environment Variables

Create `backend/.env` file:

```env
PORT=5000
FIREBASE_PROJECT_ID=your_project_id
```

### Firebase Setup

1. **Create Firebase Project**
   - Go to https://console.firebase.google.com
   - Create new project
   - Enable Firestore Database
   - Enable Authentication (Email/Password)
   - Enable Firebase Hosting

2. **Firestore Security Rules**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
       match /courses/{courseId} {
         allow read: if true;
         allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
       }
       match /quizzes/{quizId} {
         allow read: if true;
         allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
       }
       match /exercises/{exerciseId} {
         allow read: if true;
         allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
       }
       match /quiz-results/{resultId} {
         allow read, create: if request.auth != null;
       }
       match /exercise-progress/{progressId} {
         allow read, write: if request.auth != null;
       }
       match /user-progress/{progressId} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

3. **Required Firestore Indexes**

   Create these composite indexes in Firebase Console:
   
   - **courses**
     - `status` (Ascending) + `createdAt` (Descending)
     - `category` (Ascending) + `status` (Ascending) + `createdAt` (Descending)
   
   - **modules**
     - `courseId` (Ascending) + `order` (Ascending)
   
   - **quizzes**
     - `courseId` (Ascending) + `order` (Ascending)
   
   - **exercises**
     - `courseId` (Ascending) + `order` (Ascending)
   
   - **quiz-results**
     - `userId` (Ascending) + `quizId` (Ascending) + `completedAt` (Descending)
   
   - **exercise-progress**
     - `userId` (Ascending) + `courseId` (Ascending)

### Cloudinary Setup

1. **Create Cloudinary Account**
   - Go to https://cloudinary.com
   - Sign up for free account
   - Note your Cloud Name

2. **Create Upload Presets**

   **For Images (course_thumbnails):**
   - Settings → Upload → Add upload preset
   - Name: `course_thumbnails`
   - Signing Mode: Unsigned
   - Folder: `education-platform/thumbnails`
   - Resource Type: Image
   - Access Mode: Public

   **For Videos (course_videos):**
   - Settings → Upload → Add upload preset
   - Name: `course_videos`
   - Signing Mode: Unsigned
   - Folder: `education-platform/videos`
   - Resource Type: Video
   - Access Mode: Public

## 🏃 Running the Application

### Development Mode

**Frontend:**
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:5173

**Backend (Optional):**
```bash
cd backend
npm start
```
Backend will run on http://localhost:5000

### Build for Production

```bash
cd frontend
npm run build
```

Built files will be in `frontend/dist`

## 🌐 Deployment

### Deploy to Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init
   ```
   - Select: Hosting
   - Public directory: `frontend/dist`
   - Single-page app: Yes
   - Auto builds: No

4. **Build and Deploy**
   ```bash
   cd frontend
   npm run build
   firebase deploy --only hosting
   ```

## 📱 Usage

### Student Workflow

1. **Sign Up / Login**
   - Navigate to /signup or /login
   - Create account with email/password

2. **Browse Courses**
   - Visit /courses
   - Filter by category, level, or search
   - Click course to view details

3. **Enroll in Course**
   - Click "S'inscrire" on course detail page
   - (If free) Instant enrollment
   - (If paid) Complete payment process

4. **Take Course**
   - Access course from "Mes Cours"
   - Watch video lessons
   - Take quizzes
   - Complete exercises
   - Track progress

### Admin Workflow

1. **Access Admin Dashboard**
   - Login with admin account
   - Navigate to /admin/dashboard

2. **Create Course**
   - Click "Nouveau Cours"
   - Fill in course details
   - Upload thumbnail via Cloudinary
   - Set pricing and category

3. **Add Course Content**
   - Edit course → Content tab
   - Create modules
   - Add lessons (YouTube or Cloudinary video)
   - Save changes

4. **Create Quizzes**
   - In course list, click 🧠 Brain icon
   - Click "Créer un Quiz"
   - Add questions with answers
   - Set difficulty level
   - Save quiz

5. **Create Exercises**
   - Similar to quizzes
   - Define 3 difficulty levels
   - Add starter code and solutions
   - Provide hints

6. **Publish Course**
   - Set status to "published"
   - Course becomes visible to students

## 📁 Project Structure

```
plateforme-edu/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/          # Admin components
│   │   │   ├── common/         # Shared components
│   │   │   ├── content/        # Content viewers
│   │   │   ├── courses/        # Course components
│   │   │   ├── exercises/      # Exercise components
│   │   │   ├── lessons/        # Lesson player
│   │   │   └── quiz/           # Quiz components
│   │   ├── contexts/           # React contexts
│   │   ├── pages/              # Page components
│   │   ├── services/           # API services
│   │   ├── config/             # Configuration
│   │   └── App.jsx             # Main app
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── services/
│   │   └── index.js
│   └── package.json
└── README.txt
```

## 🔐 Default Admin Account

To create an admin account:

1. Sign up normally
2. Go to Firebase Console → Firestore
3. Find user in `users` collection
4. Add field: `role: "admin"`

## 🐛 Troubleshooting

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Firebase Errors
- Check environment variables are set correctly
- Verify Firebase project ID matches
- Ensure Firestore indexes are created

### Cloudinary Upload Fails
- Verify upload presets are created
- Check cloud name is correct
- Ensure preset is set to "Unsigned"

### Quiz/Exercise Not Showing
- Check Firestore indexes are created
- Verify courseId matches
- Check browser console for errors

## 📞 Support

For issues or questions, please contact: [your-email@example.com]

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ using React, Firebase, and Cloudinary**
