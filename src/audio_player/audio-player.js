document.addEventListener("DOMContentLoaded", () => {
  chrome.runtime.onMessage.addListener((message) => {
    if (message.title === "GMSG-Play-Sound") {
      const audio = new Audio;
      audio.src = message.audio;
      audio.addEventListener("ended", () => {
        chrome.runtime.sendMessage({ title: "GMSG-Audio-Ended" });
      })
      audio.play();
    }
  });
});