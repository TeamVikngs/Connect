function populateUsers(users) {
  // remove the current users from the list of users
  
  const otherUsers = users.filter(user => user.id !== username);

  const usersElement = document.getElementById('users');
  otherUsers.map(user => {
    const userElement = document.createElement('div');

    userElement.className = 'user';
    userElement.id = user.id;
    userElement.textContent = user.id;
    userElement.onclick = () => selectUserHandler(user);

    usersElement.append(userElement);
  });
}
