var searcherButton = document.getElementById('searcherButton');
searcherButton.addEventListener('click', function () {
    if (document.getElementById('searcherInput').value.length > 0) {
    	if (window.location.pathname.split("/").pop() == "product.html"){
			sessionStorage.setItem("searchExpression", document.getElementById('searcherInput').value);
			filterCategory(sessionStorage.getItem("selectedCategory"));
		} else {
			sessionStorage.setItem("searchExpression", document.getElementById('searcherInput').value);
        	window.location.href = "product.html";
		}

    }
});