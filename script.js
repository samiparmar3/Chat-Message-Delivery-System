const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const text = messageInput.value.trim();

    if (!text) return;

    const message = document.createElement("div");
    message.className = "message sent";

    const textNode = document.createElement("div");
    textNode.textContent = text;

    const status = document.createElement("div");
    status.className = "status";
    status.textContent = "Sending...";

    message.appendChild(textNode);
    message.appendChild(status);

    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;

    messageInput.value = "";

    sending(status);
}

function sending(statusElement) {
    setTimeout(() => {
        statusElement.textContent = "✓ Sent";

        setTimeout(() => {
            statusElement.textContent = "✓✓ Delivered";

            setTimeout(() => {
                statusElement.textContent = "✓✓ Seen";
            }, 2000);

        }, 2000);

    }, 1500);
}