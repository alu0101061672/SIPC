if (sessionStorage.getItem("cart-items") == null) {
    sessionStorage.setItem("cart-items", JSON.stringify([]));
}
var subtotal = 0;
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

    subtotal += quantity * price;
    document.getElementById('cart-items').appendChild(li);
    document.getElementById('different-products').innerText = parseInt(document.getElementById('different-products').innerText, 10) + parseInt(quantity);
    document.getElementById('subtotal').innerText = subtotal;

    listOfCartItems.push({ id: productId, itemQuantity: quantity, itemPicture: picture, itemName: name, itemPrice: price });
    sessionStorage.setItem("cart-items", JSON.stringify(listOfCartItems));
}
var prevCartItems = JSON.parse(sessionStorage.getItem("cart-items"));
for (var i = 0; i < prevCartItems.length; i++) {
    var li = document.createElement('li');
    li.className = "header-cart-item";
    li.id = prevCartItems[i].id;
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
    document.getElementById('different-products').innerText = parseInt(document.getElementById('different-products').innerText, 10) + parseInt(prevCartItems[i].itemQuantity);
    document.getElementById('subtotal').innerText = subtotal;
}