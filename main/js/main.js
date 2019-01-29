document.getElementById('sites').onclick = function(){
    document.getElementById('block-list').style.left = 0 + "%";
    liClear();
    this.classList.add('liHoverOn');
}
document.getElementById('other').onclick = function(){
    document.getElementById('block-list').style.left = -100 + "%";
    liClear();
    this.classList.add('liHoverOn');
}

function liClear(){
    var libtn = document.getElementsByClassName('liBtn');
    for (var i = 0; i < libtn.length; i++){
        libtn[i].classList.remove('liHoverOn');
    }
}


