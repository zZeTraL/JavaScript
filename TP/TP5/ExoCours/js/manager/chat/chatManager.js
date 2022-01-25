let chatManager = (function () {

    const maxChar = 300; // with space
    let input = document.getElementById("input");
    let chat = document.getElementById("chatDiv");
    let currentChar = document.getElementById("currentChar");

    socket.on('message', (msg) => {
        let p = document.createElement("p");
        p.textContent = msg;
        chat.appendChild(p);
    })

    return {

        // Getters
        getMaxChar: () => maxChar,
        getMessage: () => input.value,
        getLength: () => input.value.length,

        // Methods
        resetInput() {
            input.value = "";
            currentChar.textContent = "0/" + maxChar;
        },

        sendMessage() {
            if (input.value && input.value.length <= maxChar) {
                socket.emit('message', input.value);
                this.resetInput();
            } else {
                console.error("ArrayIndexOutOfBoundsException:chatManager:13")
            }
        },

        // Listener
        onTyping() {
            if (input.value.length > maxChar) {
                currentChar.classList.toggle("animate__animated");
                currentChar.classList.toggle("animate__shakeX");
                currentChar.style.color = "red";
                currentChar.textContent = input.value.length + "/" + maxChar;
            } else {
                currentChar.style.color = "black";
                currentChar.textContent = input.value.length + "/" + maxChar;
            }
        },

    }

})();