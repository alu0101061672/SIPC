var productId = JSON.parse(sessionStorage.getItem("selectedProductId"));
firebase.database().ref("products/" + productId).on("value", function (snap) {
    var changedPost = snap.val();
    document.getElementById("description").innerHTML = changedPost.description;
    document.getElementById("name").innerHTML = changedPost.name;
    document.getElementById("category").innerHTML = 'Categories: ' + changedPost.category;
    document.getElementById("price").innerHTML = changedPost.price + "€";
    document.getElementById("picture").setAttribute("src", changedPost.pictures);
    document.getElementById('add-selected-product').onclick = function () {
        addToCart(parseInt(productId), parseInt(document.getElementById('quantity-input').value), "a", changedPost.name, changedPost.price);
    };
});