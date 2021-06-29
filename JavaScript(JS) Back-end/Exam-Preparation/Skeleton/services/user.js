const User = require("../models/User");

async function createUser(username, hashedPassword) {
  // TODO adapt properties to project requirements

  const user = new User({
    username,
    hashedPassword,
  });

  await user.save();

  return user;
}

async function getUserByUsername(username) {
  const pattern = new RegExp(`^${username}$`, "i");
  const user = await User.findOne({ username: { $regex: pattern } });
  return user;
}

// TODO add functions for finding user by other properties,
// as specified in the project requirements (like e-mails)

module.exports = {
  createUser,
  getUserByUsername,
};
