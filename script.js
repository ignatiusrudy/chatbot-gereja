const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const pekerjaan = [
  "Pengurus gereja",
  "Pengajar Sekolah Minggu",
  "Koordinator acara",
  "Relawan pelayanan sosial",
];

const makanan = ["Nasi Goreng", "Ayam Penyet", "Sate", "Gado-Gado"];

sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value;
  if (userMessage) {
    displayMessage(userMessage, "user");
    respond(userMessage);
    userInput.value = "";
  }
});

function displayMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll ke bawah
}

function respond(message) {
  let response = "";
  if (message.toLowerCase().includes("pekerjaan")) {
    response =
      "Berikut adalah beberapa pekerjaan yang bisa dilakukan:\n" +
      pekerjaan.join(", ");
  } else if (message.toLowerCase().includes("makanan")) {
    response =
      "Berikut adalah beberapa makanan yang bisa disajikan:\n" +
      makanan.join(", ");
  } else {
    response =
      "Maaf, saya tidak mengerti. Silakan tanyakan tentang pekerjaan atau makanan.";
  }
  displayMessage(response, "bot");
}
