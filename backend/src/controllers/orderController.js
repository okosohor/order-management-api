'use strict';
const { User, Product, Order, sequelize } = require('../models');

module.exports = {
  async createOrder(req, res) {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity || quantity <= 0) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    try {
      const user = await User.findByPk(userId);
      if (!user) return res.status(404).json({ error: 'User not found' });

      const product = await Product.findByPk(productId);
      if (!product) return res.status(404).json({ error: 'Product not found' });

      if (product.stock < quantity) {
        return res.status(400).json({ error: 'Out of stock' });
      }

      const totalPrice = parseFloat(product.price) * quantity;

      if (parseFloat(user.balance) < totalPrice) {
        return res.status(403).json({ error: 'Not enough money' });
      }

      const order = await sequelize.transaction(async (tran) => {
        user.balance -= totalPrice;
        product.stock -= quantity;

        await user.save({ transaction: tran });
        await product.save({ transaction: tran });

        return await Order.create({
          userId,
          productId,
          quantity,
          totalPrice
        }, { transaction: tran });
      });

      return res.status(201).json(order);

    } catch (err) {
      console.error('Error', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async getOrdersByUser(req, res) {
    const { userId } = req.params;
  
    if (!userId) {
      return res.status(400).json({ error: 'Missing userId parameter' });
    }
  
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const orders = await Order.findAll({
        where: { userId },
        include: [{ model: Product }],
        order: [['createdAt', 'DESC']]
      });
  
      return res.status(200).json(orders);
    } catch (err) {
      console.error('Failed to fetch orders:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};
