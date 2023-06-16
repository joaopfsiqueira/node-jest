import user from '../mongoose/models/user';

exports.insertUsers = async (req, res) => {
  const params = req.body;

  try {
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

exports.getUsers = async (req, res) => {
  const params = req.body;

  try {
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
