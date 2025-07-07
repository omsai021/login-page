function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

function showRegister() {
  document.getElementById("loginForm").classList.remove("active");
  document.getElementById("registerForm").classList.add("active");
}

function showLogin() {
  document.getElementById("registerForm").classList.remove("active");
  document.getElementById("loginForm").classList.add("active");
}

// Login validation
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (!user || !pass) {
    alert("Please enter both fields");
    return;
  }

  alert("Login successful!");
});

// Register validation
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('newUsername').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('newPassword').value;

  if (!user || !email || !pass) {
    alert("Please fill all fields");
    return;
  }

  alert("Registered successfully! Now login.");
  showLogin(); // Switch to login
});
