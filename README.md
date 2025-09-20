# MERN Ecommerce

## Description
MERN Ecommerce is a full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). It provides a complete solution for online shopping with features like user authentication, product management, shopping cart, order processing, and payment integration.

## Features
- User registration and authentication (JWT with refresh tokens)
- Product catalog with categories and brands
- Shopping cart and wishlist functionality
- Order management and tracking
- Admin dashboard for managing products, orders, users, and merchants
- Integration with Mailchimp and Mailgun for email marketing and notifications
- Social login with Google and Facebook
- Responsive design for desktop and mobile devices

## Authentication Flows

### User Registration
- **Endpoint**: `POST /api/auth/register`
- **Body**: `{ email, firstName, lastName, password, isSubscribed }`
- **Response**: `{ success, subscribed, token, refreshToken, user }`
- Issues both access token (7 days) and refresh token (30 days) upon successful registration.

### User Login
- **Endpoint**: `POST /api/auth/login`
- **Body**: `{ email, password }`
- **Response**: `{ success, token, refreshToken, user }`
- Issues both access token (7 days) and refresh token (30 days) upon successful login.

### Token Refresh
- **Endpoint**: `POST /api/auth/refresh`
- **Body**: `{ refreshToken }`
- **Response**: `{ success, token, refreshToken }`
- Validates the provided refresh token and issues new access and refresh tokens.
- Refresh tokens are stored in the database and invalidated upon use for security.

### Password Reset
- **Forgot Password**: `POST /api/auth/forgot` - Sends reset email
- **Reset Password**: `POST /api/auth/reset/:token` - Resets password with token
- **Change Password**: `POST /api/auth/reset` (authenticated) - Changes password for logged-in user

## Installation

### Prerequisites
- Node.js and npm installed
- Docker and Docker Compose installed (optional, for containerized setup)
- MongoDB instance (local or cloud)

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mateodominguez/mern-ecommerce.git
   cd mern-ecommerce
   ```

2. Install dependencies for backend and frontend:
   ```bash
   npm run install:server
   npm run install:client
   ```

3. Set up environment variables:

Copy the example environment file and update the values:

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` with your actual values. The file includes all required environment variables with placeholder values.

4. Seed the database with sample data (optional):

```bash
cd backend
npm run seed:db your_admin_email@example.com your_admin_password
```

This will create an admin user and populate the database with sample products, categories, and other data.

5. Run the application:

- Using Docker Compose (recommended):
  ```bash
  docker-compose up --build
  ```
  This will start the client on port 8080, server on port 5000, and a MongoDB container

- Or run manually:
  - Start backend server:
    ```bash
    cd backend
    npm run dev
    ```
  - Start frontend client:
    ```bash
    cd frontend
    npm run dev
    ```

## Running Tests
Currently, there are no automated tests configured for this project.

## Deployment
The backend is configured for deployment on Vercel using the `vercel.json` configuration file

For production deployment, build the frontend and serve it with a static server or integrate with the backend.

## Screenshots

![Homepage Banner](frontend/public/images/banners/banner-1.jpg)
![Product Page](frontend/public/images/banners/banner-2.jpg)

## GIFs

![Demo GIF](frontend/public/images/demo.gif) <!-- Replace with actual GIF path -->

---

For more details, visit the [GitHub repository](https://github.com/mateodominguez/mern-ecommerce).
