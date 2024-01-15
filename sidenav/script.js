const sidenav = document.getElementById('sidenav')
const cancel = document.getElementById('cancel')
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', function() {
    sidenav.classList.add('show');
})

cancel.addEventListener('click', function() {
    sidenav.classList.remove('show');
})

const sidenav2 = document.getElementById('sidenav2')
const hamburger2 = document.getElementById('hamburger2')

hamburger2.addEventListener('click', function() {
    sidenav2.classList.toggle('show2');
})

