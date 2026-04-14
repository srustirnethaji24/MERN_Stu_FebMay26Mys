const readline = require('readline');
const chalk = require('chalk');

const { createProfile, loginUser, getMyProfile, getAllUsers } = require('./user');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function showMenu() {
  console.log(chalk.yellow(`\nLINKEDIN CLONE - MAIN MENU`));
  console.log(`1. Create Profile / Login`);
  console.log(`2. View My Profile`);
  console.log(`3. View Other Profile`);
  console.log(`4. Exit`);
  console.log(`5. Login (Direct)`); 

  rl.question(chalk.cyan("\nSelect Option: "), handleMenu);
}
function handleMenu(choice) {
  switch (choice) {
    case '1':
      loginFlow();
      break;

    case '2':
      viewProfile();
      break;

    case '3':
      viewOtherProfile(); 
      break;

    case '4':
      console.log(chalk.yellow("Exiting..."));
      rl.close();
      break;
    case '5': 
        cosole.log(chalk.yellow("Logging in..."));
        rl.question("Enter Email: ", (email) => {

            const user = loginUser(email);  
        });
        break;
    default:
      console.log(chalk.red("Invalid choice"));
      showMenu();
  }
}
function loginFlow() {
  rl.question("Enter Email: ", (email) => {

    const user = loginUser(email);

    
    if (user) {
      console.log(chalk.blue(`\n Logged in as ${user.name}`));
      return showMenu();
    }

    
    console.log(chalk.yellow("\nNew user detected. Creating profile...\n"));

    const data = { email };

    rl.question("Name: ", (name) => {
      data.name = name;

      rl.question("Contact Number: ", (contact) => {
        data.contact = contact;

        rl.question("Skills (comma separated): ", (skills) => {
          data.skills = skills;

          rl.question("Education: ", (education) => {
            data.education = education;

            rl.question("Current Role: ", (role) => {
              data.role = role;

              const newUser = createProfile(data);

              console.log(chalk.green(`\nProfile created for ${newUser.name}`));
              console.log(chalk.blue(`Logged in as ${newUser.name}`));

              showMenu();
            });
          });
        });
      });
    });
  });
}
function viewProfile() {
  const user = getMyProfile();

  if (!user) {
    console.log(chalk.red("\n No active session. Please login first."));
    return showMenu();
  }

  console.log(chalk.green("\nMY PROFILE"));
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Contact: ${user.contact}`);
  console.log(`Role: ${user.headline}`);
  console.log(`Education: ${user.education.join(", ")}`);
  console.log(`Skills: ${user.skills.join(", ")}`);
  console.log(`Connections: ${user.connections.length}`);

  showMenu();
}
function viewOtherProfile() {
  const users = getAllUsers();
  const currentUser = getMyProfile();

  if (users.length === 0) {
    console.log(chalk.red("\nNo users available"));
    return showMenu();
  }
  console.log(chalk.green("\n===== OTHER USERS ====="));
  const otherUsers = users.filter(u => !currentUser || u.email !== currentUser.email);

  if (otherUsers.length === 0) {
    console.log(chalk.yellow("No other users found"));
    return showMenu();
  }

  otherUsers.forEach((u, i) => {
    console.log(`${i + 1}. ${u.name} (${u.email})`);
  });

  rl.question("\nSelect user number: ", (choice) => {
    const index = parseInt(choice) - 1;

    if (index < 0 || index >= otherUsers.length) {
      console.log(chalk.red("Invalid selection"));
      return showMenu();
    }

    const user = otherUsers[index];

    console.log(chalk.cyan("\n===== USER PROFILE ====="));
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Contact: ${user.contact}`);
    console.log(`Role: ${user.headline}`);
    console.log(`Education: ${user.education.join(", ")}`);
    console.log(`Skills: ${user.skills.join(", ")}`);
    console.log(`Connections: ${user.connections.length}`);

    showMenu();
  });
}
showMenu();