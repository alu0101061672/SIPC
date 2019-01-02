var prevCartItems = JSON.parse(sessionStorage.getItem("cart-items"));
var subtotalMoney = 0;
var shippingMoney = (Math.random() * 100) % 20;
var totalMoney = 0;
function changeQuantity(id, change) {
    var cartItems = JSON.parse(sessionStorage.getItem("cart-items"));
    var i = 0;
    while (i < cartItems.length && cartItems[i].id != id) {
        i++
    }
    if (i < cartItems.length) {
        if ((cartItems[i].itemQuantity + change) > 0) {
            addToCart(id, cartItems[i].itemQuantity + change, cartItems[i].itemPicture, cartItems[i].itemName, cartItems[i].itemPrice);
            document.getElementById('total-price-' + id).innerText = (cartItems[i].itemQuantity + change) * cartItems[i].itemPrice + '€';
            subtotalMoney += (cartItems[i].itemPrice * change);
            document.getElementById('card-subtotal').innerText = subtotalMoney.toFixed(2) + ' €';
            totalMoney = totalMoney = subtotalMoney + shippingMoney;
            document.getElementById('card-total').innerText = (totalMoney).toFixed(2) + ' €';
        } else if ((cartItems[i].itemQuantity + change) == 0) {
            removeFromCart(id);
            document.getElementById('products-to-buy').removeChild(document.getElementById('big-product-img-' + id));
            subtotalMoney += (cartItems[i].itemPrice * change);
            document.getElementById('card-subtotal').innerText = subtotalMoney.toFixed(2) + ' €';
            totalMoney = totalMoney = subtotalMoney + shippingMoney;
            document.getElementById('card-total').innerText = (totalMoney).toFixed(2) + ' €';
        }
    }
}
if(prevCartItems.length > 0){
    var notification_message = document.getElementById('cart-message');
    notification_message.parentElement.removeChild(notification_message);
}

for (var i = 0; i < prevCartItems.length; i++) {
    var totalPrice = prevCartItems[i].itemQuantity * prevCartItems[i].itemPrice;
    subtotalMoney += totalPrice;
    var tr = document.createElement('tr');
    tr.className = "table-row";
    tr.id = "big-product-img-" + prevCartItems[i].id;
    tr.innerHTML =
        '<td class="column-1">\
				<div class="cart-img-product b-rad-4 o-f-hidden">\
					<img src="' + prevCartItems[i].itemPicture + '" alt="IMG-PRODUCT">\
				</div>\
			</td>\
			<td class="column-2">' + prevCartItems[i].itemName + '</td>\
			<td class="column-3">' + prevCartItems[i].itemPrice + '€</td>\
			<td class="column-4">\
				<div class="flex-w bo5 of-hidden w-size17">\
					<button class="btn-num-product-down color1 flex-c-m size7 bg8 eff2" onclick="changeQuantity(' + prevCartItems[i].id + ',-1)" >\
						<i class="fs-12 fa fa-minus" aria-hidden="true"></i>\
					</button>\
					<input class="size8 m-text18 t-center num-product" type="text" name="num-product1" value="' + prevCartItems[i].itemQuantity + '" disabled>\
					<button class="btn-num-product-up color1 flex-c-m size7 bg8 eff2" onclick="changeQuantity(' + prevCartItems[i].id + ',1)" >\
						<i class="fs-12 fa fa-plus" aria-hidden="true"></i>\
					</button>\
				</div>\
			</td>\
			<td id="total-price-' + prevCartItems[i].id + '" class="column-5">' + totalPrice + '€</td>';

    document.getElementById('products-to-buy').appendChild(tr);
}
totalMoney = subtotalMoney + shippingMoney;
document.getElementById('card-subtotal').innerText = subtotalMoney.toFixed(2) + ' €';
document.getElementById('shipping').innerText = (shippingMoney).toFixed(2) + ' €';
document.getElementById('card-total').innerText = (totalMoney).toFixed(2) + ' €';