const btn = document.getElementById("btn");
const convinceBtn = document.getElementById("convince");

document.addEventListener("DOMContentLoaded", () => {
  if (!("Notification" in window)) {
    alert("Browser does not support notifications");
  } else {
    function handleNotification() {
      Notification.requestPermission().then((result) => {
        if (result === "granted") {
          alert("Maan gaye");
          btn.style.display = "none";
        } else {
          alert("Main nahi maan rahe/raha");
        }
      });
    }

    function handleConvince() {
      const notification = new Notification("Khana khaya kya", {
        body: "Aap nahi kahogi toh main bhi nahi khaunga",
      });

      if (Notification.permission != "granted") {
        alert("Abe pahele permission le");
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
