if (sessionStorage.getItem("cart-items") == null) {
    sessionStorage.setItem("cart-items", JSON.stringify([]));
}
var subtotal = 0;

function removeFromCart(id) {
    var cartItems = JSON.parse(sessionStorage.getItem("cart-items"));
    var i = 0;
    while (i < cartItems.length && cartItems[i].id != id) {
        i++
    }
    if(i < cartItems.length){
        subtotal -= (cartItems[i].itemQuantity * cartItems[i].itemPrice);
        document.getElementById('subtotal').innerText = (subtotal).toFixed(2);
        document.getElementById('different-products').innerText = parseInt(document.getElementById('different-products').innerText - cartItems[i].itemQuantity);
        cartItems.splice(i, 1);
        document.getElementById('cart-items').removeChild(document.getElementById(id));
        sessionStorage.setItem("cart-items", JSON.stringify(cartItems));
    }
}

function addToCart(productId, quantity, picture, name, price) {
    var listOfCartItems = JSON.parse(sessionStorage.getItem("cart-items"));
    for (var i = 0; i < listOfCartItems.length; i++) {
        if(listOfCartItems[i].id == productId){
            subtotal-= listOfCartItems[i].itemQuantity * listOfCartItems[i].itemPrice;
            document.getElementById('different-products').innerText = parseInt(document.getElementById('different-products').innerText, 10) - parseInt(listOfCartItems[i].itemQuantity);
            document.getElementById(productId).remove();
            listOfCartItems.splice(i, 1);
            break;
        }
    }
    var li = document.createElement('li');
    li.className = "header-cart-item";
    li.id = productId;
    li.innerHTML =
        '<div class="header-cart-item-img" onclick="removeFromCart(' + productId + ')">\
                <img src="' + picture + '" alt="IMG">\
            </div>\
            <div class="header-cart-item-txt">\
                <a href="#" class="header-cart-item-name">\
                    ' + name + '\
                </a>\
                <span class="header-cart-item-info">\
                    ' + quantity + 'x' + (price).toFixed(2) + '€\
                </span>\
            </div>';

    subtotal += quantity * price;
    document.getElementById('cart-items').appendChild(li);
    document.getElementById('different-products').innerText = parseInt(document.getElementById('different-products').innerText, 10) + parseInt(quantity);
    document.getElementById('subtotal').innerText = (subtotal).toFixed(2);

    listOfCartItems.push({ id: productId, itemQuantity: quantity, itemPicture: picture, itemName: name, itemPrice: price });
    sessionStorage.setItem("cart-items", JSON.stringify(listOfCartItems));
}
var prevCartItems = JSON.parse(sessionStorage.getItem("cart-items"));
for (var i = 0; i < prevCartItems.length; i++) {
    var li = document.createElement('li');
    li.className = "header-cart-item";
    li.id = prevCartItems[i].id;
    li.innerHTML =
        '<div class="header-cart-item-img" onclick="removeFromCart(' + prevCartItems[i].id + ')">\
                <img src="' + prevCartItems[i].itemPicture + '" alt="IMG">\
            </div>\
            <div class="header-cart-item-txt">\
                <a href="#" class="header-cart-item-name">\
                    ' + prevCartItems[i].itemName + '\
                </a>\
                <span class="header-cart-item-info">\
                    ' + prevCartItems[i].itemQuantity + 'x' + (prevCartItems[i].itemPrice).toFixed(2) + '€\
                </span>\
            </div>';

    subtotal += prevCartItems[i].itemQuantity * prevCartItems[i].itemPrice;
    document.getElementById('cart-items').appendChild(li);
    document.getElementById('different-products').innerText = parseInt(document.getElementById('different-products').innerText, 10) + parseInt(prevCartItems[i].itemQuantity);
    document.getElementById('subtotal').innerText = (subtotal).toFixed(2);
}