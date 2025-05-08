function updateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  const timediv = document.getElementById("currentTime");
  if (timediv) {
    timediv.innerText = now.toLocaleString("en-US", options);
  }
}

setInterval(updateTime, 1000); // Update time every second
window.onload = updateTime; // Update immediately when page loads
