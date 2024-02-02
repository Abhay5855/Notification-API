const btn = document.getElementById("btn");
const convinceBtn = document.getElementById("convince");

document.addEventListener("DOMContentLoaded", () => {
  if (!("Notification" in window)) {
    alert("Browser does not support notifications");
  } else {
    function handleNotification() {
      Notification.requestPermission().then((result) => {
        if (result === "granted") {
          alert("You have my permission");
          btn.style.display = "none";
        } else {
          alert("No we won't allow");
        }
      });
    }

    function handleConvince() {
      const notification = new Notification("Thank you !", {
        body: "Goa is on!",
      });

      if (Notification.permission != "granted") {
        alert("Take Permission first");
      }
    }
  }

  btn.addEventListener("click", () => {
    handleNotification();
  });

  convinceBtn.addEventListener("click", () => {
    handleConvince();
  });
});
