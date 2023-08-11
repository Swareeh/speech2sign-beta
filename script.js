const nav_connections = document.getElementById('nav_connections')
const menu_brgr = document.getElementById('menu_brgr')

menu_brgr.addEventListener('click', function() {
    if (nav_connections.style.left == '450px') {
        nav_connections.style.left = '0px';
    } else{
        nav_connections.style.left = '450px';
    }
})