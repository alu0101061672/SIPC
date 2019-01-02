sessionStorage.setItem("lowerPrice", document.getElementById('value-lower').innerText);
sessionStorage.setItem("higherPrice", document.getElementById('value-upper').innerText);
if (sessionStorage.getItem("selectedCategory") == null || sessionStorage.getItem("selectedCategory").length == 0)
    sessionStorage.setItem("selectedCategory", 'All')

function filterProducts(category, lower, higher, searchExpression) {
    var resultsQuantity = 0;
    document.getElementById('results-quantity').innerText = "Showing 0 results";
    if (searchExpression == null) searchExpression = "";
    var products = document.getElementById("products");
    while (products.lastChild) {
        products.removeChild(products.lastChild)
    }

    var description = "";
    if(searchExpression.length > 0){
        description += " about '" + searchExpression + "'";
    }
    if(category == 'All'){
        description += " of all categories"
    } else {
        description += " of the category " + category;
    }
    description += ' between ' + lower + '-' + higher + ' euros.';

    if (category != "All") {
        firebase.database().ref("products").orderByChild("category").equalTo(category).on("child_added", function (snapshot, prevChildKey) {
            if (snapshot.child("price").val() >= lower && snapshot.child("price").val() <= higher && snapshot.child("name").val().search(searchExpression) != -1) {
                var div = document.createElement('div');
                div.className = 'col-sm-12 col-md-6 col-lg-4 p-b-50';
                div.innerHTML = '<div class="shadow-car block2">\
							<div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">\
							<img src="' + snapshot.child("pictures").child("0").val() + '" alt="IMG-PRODUCT">\
							<div class="block2-overlay trans-0-4">\
							<a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4"><i class="icon-wishlist icon_heart_alt"\
							aria-hidden="true"></i><i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i></a>\
							<div class="block2-btn-addcart w-size1 trans-0-4">\
							<button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onclick="addToCart(' + snapshot.key + ',' + 1 + ',\'' + snapshot.child("pictures").child("0").val() + '\',\'' + snapshot.child("name").val() + '\',' + snapshot.child("price").val() + ')">Add to Cart</button>\
							</div>\
							</div>\
							</div>\
							<div class="p-t-20 p-l-15 p-b-10">\
							<a id="' + snapshot.key + '" href="product-detail.html" class="text-overflow dis-block s-text3 p-b-5" onclick="seeDetails(this)">' + snapshot.child("name").val() + '</a><span\
							class="block2-price m-text6 p-r-5">' + (snapshot.child("price").val()).toFixed(2) + '&euro;</span>\
							</div>\
							</div>';
                document.getElementById('products').appendChild(div);
                resultsQuantity += 1;
                document.getElementById('results-quantity').innerText = "Showing " + resultsQuantity + " results" + description;
            }
        });
    } else {
        firebase.database().ref("products").orderByChild("price").startAt(lower).endAt(higher).on("child_added", function (snapshot, prevChildKey) {
            if (snapshot.child("name").val().search(searchExpression) != -1) {
                var div = document.createElement('div');
                div.className = 'col-sm-12 col-md-6 col-lg-4 p-b-50';
                div.innerHTML = '<div class="shadow-car block2">\
							<div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">\
							<img src="' + snapshot.child("pictures").child("0").val() + '" alt="IMG-PRODUCT">\
							<div class="block2-overlay trans-0-4">\
							<a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4"><i class="icon-wishlist icon_heart_alt"\
							aria-hidden="true"></i><i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i></a>\
							<div class="block2-btn-addcart w-size1 trans-0-4">\
							<button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" onclick="addToCart(' + snapshot.key + ',' + 1 + ',\'' + snapshot.child("pictures").child("0").val() + '\',\'' + snapshot.child("name").val() + '\',' + snapshot.child("price").val() + ')">Add to Cart</button>\
							</div>\
							</div>\
							</div>\
							<div class="p-t-20 p-l-15 p-b-10">\
							<a id="' + snapshot.key + '" href="product-detail.html" class="text-overflow dis-block s-text3 p-b-5" onclick="seeDetails(this)">' + snapshot.child("name").val() + '</a><span\
							class="block2-price m-text6 p-r-5">' + (snapshot.child("price").val()).toFixed(2) + '&euro;</span>\
							</div>\
							</div>';
                document.getElementById('products').appendChild(div);
                resultsQuantity += 1;
                document.getElementById('results-quantity').innerText = "Showing " + resultsQuantity + " results" + description;
            }
        });
    }
}
function filterPrice() {
    var lower = document.getElementById('value-lower').innerText;
    var higher = document.getElementById('value-upper').innerText;
    sessionStorage.setItem("lowerPrice", lower);
    sessionStorage.setItem("higherPrice", higher);

    filterProducts(sessionStorage.getItem("selectedCategory"), parseInt(lower, 10), parseInt(higher, 10), sessionStorage.getItem("searchExpression"));
}
function filterCategory(category) {
    var lastCategory = sessionStorage.getItem("selectedCategory");
    sessionStorage.setItem("selectedCategory", category);

    var lower = sessionStorage.getItem("lowerPrice");
    var higher = sessionStorage.getItem("higherPrice");
    filterProducts(category, parseInt(lower, 10), parseInt(higher, 10), sessionStorage.getItem("searchExpression"));
}

filterCategory(sessionStorage.getItem("selectedCategory"));

window.addEventListener('unload', function (event) {
    sessionStorage.removeItem("lowerPrice");
    sessionStorage.removeItem("higherPrice");
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchExpression");
});