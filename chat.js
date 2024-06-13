let currentUser = "";
let userAccounts = [];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  const userExists = userAccounts.find(user => user.username === username && user.password === password);
  
  if(userExists) {
    currentUser = username;
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("chatPage").style.display = "block";
    document.getElementById("user").innerText = currentUser;
  } else {
    alert("Nom d'utilisateur ou mot de passe incorrect!");
  }
}

function createAccount() {
  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;
  
  const usernameExists = userAccounts.find(user => user.username === newUsername);
  
  if(newUsername && newPassword && !usernameExists) {
    userAccounts.push({ username: newUsername, password: newPassword });
    alert("Compte créé avec succès, veuillez vous connecter.");
    document.getElementById("accountCreatePage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
  } else if (usernameExists) {
    alert("Ce nom d'utilisateur est déjà pris, veuillez en choisir un autre.");
  } else {
    alert("Veuillez remplir tous les champs pour créer un compte.");
  }
}

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  if(messageInput.value) {
    const message = messageInput.value;
    const messageElement = document.createElement("p");
    messageElement.innerText = `${currentUser}: ${message}`;
    document.getElementById("chatContainer").appendChild(messageElement);
    messageInput.value = "";
  }
}

function showAccountCreate() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("accountCreatePage").style.display = "block";
}
