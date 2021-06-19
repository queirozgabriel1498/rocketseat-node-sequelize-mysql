const Address = require('../models/Address');
const User = require('../models/User');

/**
 *Um endereço pertence a um usuário.
 */

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'addresses' },
    });

    return res.json(user.addresses);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found!' });
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id,
    });

    return res.json({ message: 'Address created successfully', address });
  },
};
