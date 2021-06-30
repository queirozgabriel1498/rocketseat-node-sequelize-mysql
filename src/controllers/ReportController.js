// "Relatórios"

const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  // Show report.
  async show(req, res) {
    // Find all users where email finished with %@hotmail.com
    // Of these users, find all users living in street "Rua do Brasil"
    // ::: find all techs started with React%

    const users = await User.findAll({
      // Filters
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.like]: '%@hotmail.com',
        },
      },

      // Multiple relationship.
      include: [
        {
          association: 'addresses',
          where: { street: 'Rua do Brasil' },
        }, // addresses
        {
          association: 'techs',
          required: false,
          where: { name: { [Op.like]: 'React%' } },
        }, // techs
      ],
    });

    console.log(users);

    return res.json(users);
  },
};
