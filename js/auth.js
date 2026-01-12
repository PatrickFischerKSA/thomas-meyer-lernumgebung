const PASSWORD = "thomas_meyer";

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === PASSWORD) {
    sessionStorage.setItem("access_granted", "true");
    window.location.href = "protected.html";
  } else {
    error.textContent = "Falsches Passwort.";
  }
}
