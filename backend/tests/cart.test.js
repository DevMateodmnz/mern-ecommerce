const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const User = require('../models/user');
const Product = require('../models/product');
const Cart = require('../models/cart');

describe('Cart Routes', () => {
  let token;
  let productId;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/test');
  });

  afterAll(async () => {
    await User.deleteMany({});
    await Product.deleteMany({});
    await Cart.deleteMany({});
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
    await Product.deleteMany({});
    await Cart.deleteMany({});

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
    productId = savedProduct._id;
  });

  describe('POST /api/cart/add', () => {
    it('should add items to cart', async () => {
      const cartData = {
        products: [
          {
            product: productId,
            quantity: 2,
            price: 10.99
          }
        ]
      };

      const response = await request(app)
        .post('/api/cart/add')
        .set('Authorization', token)
        .send(cartData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.cartId).toBeDefined();
    });

    it('should not add to cart without auth', async () => {
      const cartData = {
        products: [
          {
            product: productId,
            quantity: 1,
            price: 10.99
          }
        ]
      };

      await request(app)
        .post('/api/cart/add')
        .send(cartData)
        .expect(401);
    });
  });
});
