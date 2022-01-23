let form = document.getElementById('form');
let input = document.getElementById('input');
let chatContainer = document.getElementById('chat')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    chatManager.sendMessage();
});