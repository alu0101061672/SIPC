if (sessionStorage.getItem("cart-items") == null) {
    sessionStorage.setItem("cart-items", JSON.stringify([]));
}
var subtotal = 0;
function addToCart(productId, quantity, picture, name, price) {
    var li = document.createElement('li');
    li.className = "header-cart-item";
    li.innerHTML =
        '<div class="header-cart-item-img">\
                <img src="' + picture + '" alt="IMG">\
            </div>\
            <div class="header-cart-item-txt">\
                <a href="#" class="header-cart-item-name">\
                    ' + name + '\
                </a>\
                <span class="header-cart-item-info">\
                    ' + quantity + 'x' + price + '€\
                </span>\
            </div>';

    document.getElementById('cart-items').appendChild(li);
    document.getElementById('different-products').innerText = parseInt(document.getElementById('different-products').innerText, 10) + quantity;

    var cartItems = JSON.parse(sessionStorage.getItem("cart-items"));
    cartItems.push({ id: productId, itemQuantity: quantity, itemPicture: picture, itemName: name, itemPrice: price });
    sessionStorage.setItem("cart-items", JSON.stringify(cartItems));
}
var prevCartItems = JSON.parse(sessionStorage.getItem("cart-items"));
for (var i = 0; i < prevCartItems.length; i++) {
    var li = document.createElement('li');
    li.className = "header-cart-item";
    li.innerHTML =
        '<div class="header-cart-item-img">\
                <img src="' + prevCartItems[i].itemPicture + '" alt="IMG">\
            </div>\
            <div class="header-cart-item-txt">\
                <a href="#" class="header-cart-item-name">\
                    ' + prevCartItems[i].itemName + '\
                </a>\
                <span class="header-cart-item-info">\
                    ' + prevCartItems[i].itemQuantity + 'x' + prevCartItems[i].itemPrice + '€\
                </span>\
            </div>';

    subtotal += prevCartItems[i].itemQuantity * prevCartItems[i].itemPrice;
    document.getElementById('cart-items').appendChild(li);
    document.getElementById('different-products').innerText = parseInt(document.getElementById('different-products').innerText, 10) + prevCartItems[i].itemQuantity;
    document.getElementById('subtotal').innerText = subtotal;
}