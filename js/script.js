// Menampilkan pesan alert ketika halaman dimuat
alert("Hello guys, Selamat datang di Dimsburger website");

// Mendapatkan elemen navbar-nav yang akan ditampilkan atau disembunyikan
const navbarNav = document.querySelector(".navbar-nav");

// Mendapatkan elemen hamburger menu
const hamburger = document.querySelector("#hamburger-menu");

// Menambahkan event listener untuk klik pada hamburger menu
hamburger.onclick = () => {
  // Mengubah status class 'active' pada navbarNav
  navbarNav.classList.toggle("active");
};

// Menambahkan event listener untuk klik pada seluruh dokumen
document.addEventListener("click", function (e) {
  // Mengecek apakah klik terjadi di luar hamburger menu dan navbar
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    // Menghapus class 'active' dari navbarNav untuk menutup menu
    navbarNav.classList.remove("active");
  }
});
