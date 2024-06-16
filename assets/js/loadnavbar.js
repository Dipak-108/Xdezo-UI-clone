
function loadNavbar() {
    fetch('/nav_pages/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
}


window.onload = function() {
    loadNavbar();
};
