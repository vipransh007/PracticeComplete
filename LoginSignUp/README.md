# LoginSignUp Project

A full-stack authentication system with React frontend and Node.js backend.

## Project Structure

- `frontend/` - React application with Vite
- `backend/` - Node.js Express server with MongoDB

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend/src
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend/src/` directory with:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/loginSignUp
   CORS_ORIGIN=http://localhost:5173
   NODE_ENV=development
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_REFRESH_SECRET=your-super-secret-refresh-key-here
   ```

4. Install missing dependencies:
   ```bash
   npm install jsonwebtoken bcryptjs
   ```

5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Testing the Connection

### 1. Test Backend API
- Backend should be running on `http://localhost:5000`
- Test endpoint: `GET /api/test` should return `{ message: 'Backend is working! 🚀' }`

### 2. Test Frontend
- Frontend should be running on `http://localhost:5173`
- The login form should be visible
- Check browser console for any errors

### 3. Test API Connection
- Open browser dev tools
- Try to submit the login form
- Check Network tab for API calls to `/api/v1/user/login`
- Check Console for any error messages

## API Endpoints

- `POST /api/v1/user/register` - User registration
- `POST /api/v1/user/login` - User login
- `GET /api/test` - Test endpoint

## Data Format

### Login Request
```json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
```

### Login Response
```json
{
  "message": "User Logged In Successfully",
  "user": {
    "_id": "...",
    "username": "testuser",
    "email": "test@example.com",
    "fullname": "Test User"
  }
}
```

## Troubleshooting

1. **MongoDB Connection Error**: Ensure MongoDB is running locally
2. **CORS Error**: Check that `CORS_ORIGIN` in `.env` matches frontend URL
3. **JWT Error**: Ensure JWT secrets are set in `.env`
4. **Port Conflicts**: Check if ports 5000 (backend) and 5173 (frontend) are available

## Current Status

✅ Frontend API endpoint path fixed  
✅ Data format being sent fixed  
✅ Environment variables setup documented  
🔧 Backend dependencies need to be installed  
🔧 MongoDB connection needs to be tested  
🔧 Full connection and data flow testing pending
