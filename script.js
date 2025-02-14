const messages = [
  "Are you sure?",
  "Really sure??",
  "Are you positive?",
  "Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️",
];

let messageIndex = 0;

// Fungsi untuk menangani klik tombol "No"
function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // Ubah teks tombol "No"
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Perbesar tombol "Yes" setiap kali tombol "No" ditekan
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

// Fungsi untuk menangani klik tombol "Yes"
function handleYesClick() {
  const body = document.querySelector("body");

  // Tambahkan efek animasi sebelum pindah halaman
  body.style.transition = "opacity 0.5s ease-out";
  body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "yes_page.html";
  }, 500);
}

// FUNGSI UNTUK MEMUTAR MUSIK YANG TIDAK BERHENTI SAAT PINDAH HALAMAN
document.addEventListener("DOMContentLoaded", function () {
  let audio;

  // Cek apakah audio sudah ada sebelumnya
  if (!window.audioInstance) {
    audio = new Audio("song.mp3"); // Ganti dengan lagu yang ingin diputar
    audio.loop = true;
    audio.volume = 0.5; // Sesuaikan volume
    window.audioInstance = audio;

    // Mulai musik hanya setelah pengguna berinteraksi
    document.body.addEventListener("click", function startMusic() {
      window.audioInstance
        .play()
        .catch((error) => console.log("Autoplay blocked:", error));
      document.body.removeEventListener("click", startMusic);
    });
  }
});
