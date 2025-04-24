// 📌 Cart Functionality
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// 📌 Notification + Service Worker
if ("Notification" in window && "serviceWorker" in navigator) {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      console.log("🔔 Notification permission granted!");

      navigator.serviceWorker.register("/service-worker.js")
        .then(reg => {
          console.log("✅ Service Worker Registered!", reg.scope);

          // OPTIONAL: Trigger a notification on load
          reg.showNotification("Welcome!", {
            body: "Thanks for visiting our store 🛒",
            icon: "https://via.placeholder.com/128",
            tag: "welcome-msg"
          });

        })
        .catch(err => {
          console.error("❌ Service Worker Registration Failed!", err);
        });

    } else {
      console.log("❌ Notification permission denied!");
    }
  });
} else {
  console.log("❌ Notifications or Service Workers are not supported in this browser.");
}
