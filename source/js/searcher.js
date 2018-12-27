var searcherButton = document.getElementById('searcherButton');
searcherButton.addEventListener('click', function () {
    if (document.getElementById('searcherInput').value.length > 0) {
        window.location.href = "product.html";
        sessionStorage.setItem("searchExpression", document.getElementById('searcherInput').value);
    }
});