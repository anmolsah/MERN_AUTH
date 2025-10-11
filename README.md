# MERN Authentication Application

<div align="center">
  <img src="client/src/assets/MERN.png" alt="MERN Auth Logo" width="600"/>
</div>

A full-stack authentication system built with MongoDB, Express.js, React, and Node.js. This application provides secure user registration, login, email verification, and password reset functionality.

## Features

- User registration and login
- JWT-based authentication with HTTP-only cookies
- Email verification with OTP
- Password reset functionality
- Protected routes and middleware
- Responsive UI with Tailwind CSS
- Toast notifications for user feedback
- MongoDB integration with Mongoose

## Tech Stack

### Frontend

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and development server
- **React Router DOM 7.9.3** - Client-side routing
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **Axios 1.12.2** - HTTP client
- **React Toastify 11.0.5** - Toast notifications
- **Lucide React 0.545.0** - Icon library

### Backend

- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **MongoDB** - Database
- **Mongoose 8.18.2** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs 3.0.2** - Password hashing
- **Nodemailer 7.0.6** - Email service (using Brevo SMTP)
- **CORS 2.8.5** - Cross-origin resource sharing

## Project Structure

```
MERN_AUTH/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # React context providers
│   │   ├── pages/          # Page components
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── package.json
└── server/                 # Express backend
    ├── config/             # Database configuration
    ├── controllers/        # Route controllers
    ├── middleware/         # Custom middleware
    ├── models/             # Database models
    ├── routes/             # API routes
    └── package.json
```

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn package manager
- MongoDB database (local or cloud)

## Installation

### 1. Clone the repository

```bash
git clone git@github.com:anmolsah/MERN_AUTH.git
cd MERN_AUTH
```

### 2. Install server dependencies

```bash
cd server
npm install
```

### 3. Install client dependencies

```bash
cd ../client
npm install
```

## Configuration

### Server Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
SMTP_USER=your_brevo_smtp_username
SMTP_PASSWORD=your_brevo_smtp_password
```

**Note:** This application uses Brevo (formerly Sendinblue) as the SMTP service provider for sending emails. You'll need to create a Brevo account and obtain SMTP credentials.

### Client Environment Variables

Create a `.env` file in the client directory:

```env
VITE_BACKEND_URL=http://localhost:5000
```

## Running the Application

### Development Mode

1. **Start the server:**

```bash
cd server
npm run dev
```

The server will run on `http://localhost:5000`

2. **Start the client:**

```bash
cd client
npm run dev
```

The client will run on `http://localhost:5173`

### Production Mode

1. **Build the client:**

```bash
cd client
npm run build
```

2. **Start the server:**

```bash
cd server
npm start
```

## API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /register` - User registration
- `POST /login` - User login
- `POST /logout` - User logout
- `POST /send-verify-otp` - Send email verification OTP
- `POST /verify-account` - Verify user account
- `GET /isauth` - Check authentication status
- `POST /send-reset-otp` - Send password reset OTP
- `POST /reset-password` - Reset user password

### User Routes (`/api/user`)

- `GET /data` - Get user data (protected)

## Database Schema

### User Model

```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required),
  verifyOtp: String,
  verifyOtpExpiresAt: Number,
  isAccountVerified: Boolean,
  resetOtp: String,
  resetOtpExpireAt: Number
}
```

## Security Features

- Password hashing with bcryptjs
- JWT tokens stored in HTTP-only cookies
- Protected routes with authentication middleware
- CORS configuration for secure cross-origin requests
- Input validation and error handling
- OTP-based email verification and password reset
- Email service integration with Brevo SMTP

## Available Scripts

### Client Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## Browser Support

This application supports all modern browsers that support ES6+ features.

## License

This project is licensed under the ISC License.
