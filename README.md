# MERN E-Commerce Application

A full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js). This application features user authentication, product management, shopping cart functionality, payment processing with Stripe, and an admin dashboard for analytics and product management.

## 🚀 Features

### User Features
- **User Authentication**: Secure signup and login with JWT tokens
- **Product Browsing**: Browse products by categories (Jeans, T-shirts, Shoes, Glasses, Jackets, Suits, Bags)
- **Shopping Cart**: Add, remove, and manage cart items
- **Checkout Process**: Secure payment processing with Stripe
- **Purchase History**: Track order history and status
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS

### Admin Features
- **Product Management**: Create, update, and delete products
- **Analytics Dashboard**: View sales analytics and charts
- **User Management**: Monitor user activity and orders
- **Coupon System**: Create and manage discount coupons

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Zustand** - State management
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Notification system
- **Recharts** - Chart library for analytics
- **Lucide React** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Stripe** - Payment processing
- **Cloudinary** - Image hosting and management
- **Redis** - Caching layer
- **Cookie Parser** - HTTP cookie parsing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Redis** (optional, for caching)

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DevMateodmnz/mern-ecommerce.git
   cd mern-ecommerce
   ```

2. **Install dependencies:**
   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   npm install --prefix frontend
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Database
   MONGO_URI=your_mongodb_connection_string

   # JWT
   JWT_SECRET=your_jwt_secret_key

   # Stripe
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

   # Cloudinary (for image uploads)
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

   # Redis (optional)
   REDIS_URL=your_redis_url

   # Node Environment
   NODE_ENV=development
   PORT=5000
   ```

4. **Start the application:**
   ```bash
   # Development mode (runs both frontend and backend)
   npm run dev

   # Production build
   npm run build
   npm start
   ```

5. **Access the application:**
   - Frontend: http://localhost:5173 (Vite dev server)
   - Backend API: http://localhost:5000

## 📖 Usage

### For Users
1. **Sign Up/Login**: Create an account or log in with existing credentials
2. **Browse Products**: Navigate through different categories on the homepage
3. **Add to Cart**: Click on products to view details and add them to your cart
4. **Checkout**: Proceed to checkout and complete payment with Stripe
5. **Track Orders**: View your purchase history and order status

### For Admins
1. **Access Admin Dashboard**: Navigate to `/secret-dashboard` (admin role required)
2. **Manage Products**: Create new products, update existing ones, or delete products
3. **View Analytics**: Monitor sales data, user activity, and revenue charts
4. **Manage Coupons**: Create discount coupons for users

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh-token` - Refresh JWT token

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)
- `GET /api/products/category/:category` - Get products by category

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item quantity
- `DELETE /api/cart/:id` - Remove item from cart

### Coupons
- `GET /api/coupons` - Get available coupons
- `POST /api/coupons` - Create coupon (Admin only)
- `PUT /api/coupons/:id` - Update coupon (Admin only)
- `DELETE /api/coupons/:id` - Delete coupon (Admin only)

### Payments
- `POST /api/payments/create-checkout-session` - Create Stripe checkout session
- `POST /api/payments/webhook` - Stripe webhook handler

### Analytics
- `GET /api/analytics/overview` - Get analytics overview (Admin only)
- `GET /api/analytics/daily-sales` - Get daily sales data (Admin only)

## 🏗️ Project Structure

```
mern-ecommerce/
├── backend/
│   ├── controllers/          # Route controllers
│   ├── lib/                  # Utility libraries (DB, Stripe, etc.)
│   ├── middleware/           # Custom middleware
│   ├── models/               # MongoDB models
│   ├── routes/               # API routes
│   └── server.js             # Express server entry point
├── frontend/
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Page components
│   │   ├── stores/           # Zustand state stores
│   │   ├── lib/              # Utility functions
│   │   └── App.jsx           # Main React component
│   ├── package.json
│   └── vite.config.js
├── .env                      # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with the MERN stack
- Payment processing powered by Stripe
- Image hosting by Cloudinary
- Icons by Lucide React
- UI components styled with Tailwind CSS

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainers.

---

**Happy Shopping! 🛒**
