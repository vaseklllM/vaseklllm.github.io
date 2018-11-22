// var rowHeight = document.getElementById('row-sites').offsetHeight,
//     screenHeignt = document.documentElement.clientWidth,
//     footerHeight = document.getElementById('footer').offsetHeight;

// if(screenHeignt > rowHeight+footerHeight){
//     document.getElementById('footer').style.bottom = 0 + "px";
// }

// document.getElementById('content').style.height = rowHeight + "px";
document.getElementById('content').style.height = 45 + "vw";

document.getElementById('sites').onclick = function(){
    document.getElementById('block-list').style.left = 0 + "%";
}
document.getElementById('other').onclick = function(){
    document.getElementById('block-list').style.left = -100 + "%";
}