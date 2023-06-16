import users from '../mongoose/models/user';

exports.insertUsers = async (req, res) => {
  const params = req.body;

  const user = new users(params);
  await user.save();
  res.status(201).json('user created successfully');
  try {
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const allUsers = await users.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
