if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
            .then((reg) => console.log("Service Worker registered!", reg.scope))
            .catch((err) => console.log("Service Worker failed:", err));
    });
}
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