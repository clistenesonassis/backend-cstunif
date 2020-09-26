"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      item: {
        type: Sequelize.INTEGER,
        references: { model: "items", key: "id" },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      raw_material: {
        type: Sequelize.INTEGER,
        references: { model: "raw_materials", key: "id" },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      color: {
        type: Sequelize.INTEGER,
        references: { model: "colors", key: "id" },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      size: {
        type: Sequelize.INTEGER,
        references: { model: "sizes", key: "id" },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      discount_price: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("products");
  },
};
