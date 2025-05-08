'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // FK зв'язки
      Order.belongsTo(models.User, { foreignKey: 'userId' });
      Order.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }

  Order.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.DECIMAL
    }
  }, {
    sequelize,
    modelName: 'Order',
    hooks: {
      async beforeCreate(order) {
        const product = await sequelize.models.Product.findByPk(order.productId);
        if (!product) throw new Error('Product not found');
        order.totalPrice = product.price * order.quantity;
      }
    }
  });

  return Order;
};
