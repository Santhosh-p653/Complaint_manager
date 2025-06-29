const roleSelect = document.getElementById("role");
const adminFields = document.getElementById("admin-fields");
const civilianFields = document.getElementById("civilian-fields");

roleSelect.addEventListener("change", function () {
  if (this.value === "admin") {
    adminFields.classList.remove("d-none");
    civilianFields.classList.add("d-none");
  } else {
    adminFields.classList.add("d-none");
    civilianFields.classList.remove("d-none");
  }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const role = roleSelect.value;

  if (role === "admin") {
    const adminId = document.getElementById("adminId").value.trim();
    if (adminId === "admin001") {
      window.location.href = "admin.html";
    } else {
      alert("Invalid Admin ID");
    }
  } else {
    const aadhar = document.getElementById("aadhar").value.trim();
    const phone = document.getElementById("phone").value.trim();
    if (aadhar.length === 12 && phone.length === 10) {
      window.location.href = "civilian.html";
    } else {
      alert("Please enter a valid Aadhaar and phone number.");
    }
  }
});
