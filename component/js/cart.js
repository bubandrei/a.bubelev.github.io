let dilog = document.getElementById('window');
function opened(){
    dilog.classList.add('opened');
    document.body.classList.add('general');
}

function closed(){
    dilog.classList.remove('opened');
    document.body.classList.remove('general');
}