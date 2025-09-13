const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const User = require('../models/user');
const Product = require('../models/product');
const Cart = require('../models/cart');
const Order = require('../models/order');

describe('Order Routes', () => {
  let token;
  let cartId;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/test');
  });

  afterAll(async () => {
    await User.deleteMany({});
    await Product.deleteMany({});
    await Cart.deleteMany({});
    await Order.deleteMany({});
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
    await Product.deleteMany({});
    await Cart.deleteMany({});
    await Order.deleteMany({});

    // Create a test user and get token
    const userData = {
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
      password: 'password123'
    };

    const registerResponse = await request(app)
      .post('/api/auth/register')
      .send(userData);

    token = registerResponse.body.token;

    // Create a test product
    const product = new Product({
      name: 'Test Product',
      description: 'Test Description',
      price: 10.99,
      quantity: 100,
      category: mongoose.Types.ObjectId(),
      brand: mongoose.Types.ObjectId()
    });

    const savedProduct = await product.save();

    // Create a test cart
    const cart = new Cart({
      user: registerResponse.body.user.id,
      products: [
        {
          product: savedProduct._id,
          quantity: 2,
          price: 10.99
        }
      ]
    });

    const savedCart = await cart.save();
    cartId = savedCart._id;
  });

  describe('POST /api/order/add', () => {
    it('should create an order (checkout)', async () => {
      const orderData = {
        cartId: cartId,
        total: 21.98 // 2 * 10.99
      };

      const response = await request(app)
        .post('/api/order/add')
        .set('Authorization', token)
        .send(orderData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.message).toContain('placed successfully');
      expect(response.body.order._id).toBeDefined();
    });

    it('should not create order without auth', async () => {
      const orderData = {
        cartId: cartId,
        total: 21.98
      };

      await request(app)
        .post('/api/order/add')
        .send(orderData)
        .expect(401);
    });
  });
});
