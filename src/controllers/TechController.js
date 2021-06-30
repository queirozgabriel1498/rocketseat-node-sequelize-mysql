const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
  // Find all techs.
  async techsFindAll(req, res) {
    const techs = await Tech.findAll();

    return res.json(techs);
  },

  // Find all user techs.
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: 'techs',
        attributes: ['name'],

        // Escolhendo dados da tabela de relacionamento a serem carregados.
        through: {
          attributes: [],
        },
      },
    });

    return res.json(user.techs);
  },

  // Create techs and/or associate relationship to user.
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) return res.status(400).json({ error: 'User not found!' });

    const [tech] = await Tech.findOrCreate({
      where: { name }, // short sintaxe, abreviação de {name: name}
    });

    await user.addTech(tech); // salvando na tabela de relacionamento

    return res.json(tech);
  },

  // Delete relationship betwen user and tech.
  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) return res.status(400).json({ error: 'User not found!' });

    const tech = await Tech.findOne({
      where: { name },
    });

    await user.removeTech(tech);

    return res.json();
  },
};
