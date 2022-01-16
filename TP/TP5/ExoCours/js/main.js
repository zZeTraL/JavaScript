let form = document.getElementById('form');
let input = document.getElementById('input');
let chatContainer = document.getElementById('chat')

let date = new Date();
let dateString = "[" + date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + ", " + date.getHours() + "h " + date.getMinutes() + "m] "

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        let p = document.createElement("p");
        p.innerHTML = dateString + input.value;
        chatContainer.appendChild(p);

        socket.emit('message', input.value);
        input.value = '';
    }
});

