const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatLog = document.getElementById("chat-log");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessage("user", userMessage);
  input.value = "";

  // Simulate AI response with a delay
  setTimeout(() => {
    const botReply = generateBotReply(userMessage);
    addMessage("bot", botReply);
  }, 600);
});

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function generateBotReply(userInput) {
  // Simple rule-based response for demonstration
  if (userInput.toLowerCase().includes("hello")) {
    return "Hi there! How can I help you?";
  } else if (userInput.toLowerCase().includes("your name")) {
    return "I'm a ChatGPT-like AI created by GroupNilYT with HTML, CSS, and JS!";
  } else {
    return "I'm just a simple bot, but I'm happy to chat!";
  }
}
