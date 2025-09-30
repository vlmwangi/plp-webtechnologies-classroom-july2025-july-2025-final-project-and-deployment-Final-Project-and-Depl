// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("show");
});

// Handle form submission
document.getElementById("quote-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (name && email && service && message) {
    alert(`Thank you, ${name}! Your request for a ${service} has been received. We’ll contact you at ${email}.`);
    this.reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});
