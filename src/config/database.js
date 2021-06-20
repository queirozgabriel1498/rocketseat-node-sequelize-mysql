// Exportando um objeto de configuração da base de dados.
module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'rocketseat-node-sequelize-mysql',
  define: {
    timestamps: true, // preenche automaticamente os campos created_at, updated_at, deleted_at...
    underscored: true, // nome de tabelas e colunas no formato pascal_case
  },
};
