const users = [];
let sessionUser = null;

function createProfile(data) {
  const user = {
    id: Date.now(),
    name: data.name,
    email: data.email,
    contact: data.contact,
    headline: data.role,
    skills: data.skills.split(',').map(s => s.trim()),
    education: [data.education],
    experience: [data.role],
    connections: []
  };

  users.push(user);
  sessionUser = user;

  return user;
}
function loginUser(email) {
  const user = users.find(u => u.email === email);

  if (!user) return null;

  sessionUser = user;
  return user;
}

function getMyProfile() {
  return sessionUser;
}

function getAllUsers() {
  return users;
}

function logoutUser() {
  sessionUser = null;
}

module.exports = {
  createProfile,
  loginUser,
  getMyProfile,
  getAllUsers,
  logoutUser 
};