function showSurprise() {

    // Hide first screen
    document.getElementById("main").style.display = "none";

    // Show surprise screen
    document.getElementById("surprise").style.display = "flex";

    // Play music only after click
    let music = document.getElementById("music");
    music.currentTime = 0;   // start from beginning
    music.play();
}
