const nav_connections = document.getElementById('nav_connections')
const menu_brgr = document.getElementById('menu_brgr')
const web_body = document.getElementById('web_body')

menu_brgr.addEventListener('click', function() {
    if (nav_connections.style.left == '450px') {
        nav_connections.style.left = '0px';
        web_body.style.overflow = 'hidden'
    } else{
        nav_connections.style.left = '450px';
        web_body.style.overflow = 'visible'

    }
})