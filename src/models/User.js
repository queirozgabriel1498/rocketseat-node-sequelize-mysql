const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    // Parâmetros: (campos da tabela, conexão com o banco de dados)
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },

      { sequelize }
    );
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
  }
}

module.exports = User;
