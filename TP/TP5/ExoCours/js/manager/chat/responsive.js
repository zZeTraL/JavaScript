window.onload = () => {
    chatManager.resetInput();
    addEventListener('resize', resizeChatFrame);
}

function resizeChatFrame(){
    let height = window.innerHeight * 0.65
    let width = document.getElementById("chatFrame").offsetWidth;
    document.documentElement.style.setProperty("--chatFrameHeight", height + "px");
    document.documentElement.style.setProperty("--chatFrameMaxWidth", width + "px");
}