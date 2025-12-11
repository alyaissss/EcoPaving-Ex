// Ambil semua link navbar
const navLinks = document.querySelectorAll("nav a");

// Fungsi untuk menangani klik pada navbar
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Hapus class 'active' dari semua link
    navLinks.forEach((l) => l.classList.remove("active"));
    // Tambahkan class 'active' ke link yang diklik
    this.classList.add("active");
  });
});

// Ambil button Details dan tambahkan event listener
const detailsBtn = document.querySelector(".hero-button");
detailsBtn.addEventListener("click", function () {
  // Hapus class 'active' dari semua link navbar
  navLinks.forEach((l) => l.classList.remove("active"));
  // Tambahkan class 'active' ke About
  document.getElementById("definisi-link").classList.add("active");
});

// Set default active pada Home saat halaman load
document.getElementById("beranda-link").classList.add("active");
