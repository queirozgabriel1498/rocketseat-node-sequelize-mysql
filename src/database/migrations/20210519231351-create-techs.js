'use strict';

const { sequelize } = require('../../models/User');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /* Add altering commands here. */

    return queryInterface.createTable('techs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    /* Add reverting commands here. */

    return queryInterface.dropTable('techs');
  },
};
