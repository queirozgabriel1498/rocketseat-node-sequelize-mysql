const User = require('../models/User');

module.exports = {
  // GET
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  // POST
  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json({ message: 'user created successfully', user });
  },
};
