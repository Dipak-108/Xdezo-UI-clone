function loadNavbar() {

    const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '../../assets/css/nav_pages_css/navbar.css';
document.head.appendChild(link);
    fetch('../../nav_pages/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
}

window.onload = function() {



    loadNavbar();
};