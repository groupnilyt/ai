const apiKey = "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"; // Replace with your real key

async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("You", message, "user");
  input.value = "";

  appendMessage("Bot", "Typing...", "bot");

  const chatBox = document.getElementById("chat-box");

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();
    chatBox.lastChild.remove(); // remove "Typing..."
    appendMessage("Bot", data.choices[0].message.content, "bot");
  } catch (error) {
    chatBox.lastChild.remove();
    appendMessage("Bot", "Something went wrong!", "bot");
    console.error(error);
  }
}

function appendMessage(sender, text, className) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${className}`;
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
