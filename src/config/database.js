module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'rocketseat-node-sequelize-mysql',
  define: {
    timestamps: true, // toda tabela no banco possui um campo chamado created_at e um campo chamado updated_at
    underscored: true,
  },
};
