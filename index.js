const btn = document.getElementById("btn");

document.addEventListener("DOMContentLoaded", () => {
  if (!("Notification" in window)) {
    alert("Browser does not support notifications");
  } else {
    function handleNotification() {
      Notification.requestPermission().then((result) => console.log(result));
    }

    if (Notification.permission === "granted") {
    }
  }

  btn.addEventListener("click", () => {
    handleNotification();
  });
});
