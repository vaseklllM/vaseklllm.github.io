// naw menu
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


// Портфолио 
let rowSites={
    'magnetHolder':{
        name:"Magnetic Holder",
        img:"magnet.jpg",
        title:"html + css + js + php",
        href:"magnet"
    },
    'agenciesWebsite':{
        name:"Magnetic Holder",
        img:"AgenciesWebsite.jpg",
        title:"html + css",
        href:"Agencies_Website"
    },
    'naviforce':{
        name:"naviforce min",
        img:"naviforce.jpg",
        title:"html + css + js + php",
        href:"naviforce_min"
    },
    'Next':{
        name:"Next",
        img:"next.jpg",
        title:"html + css + js",
        href:"BS_NEXT"
    }
};
let rowOther={
    'shop':{
        name:"Интернет магазин",
        img:"shop.jpg",
        title:"Images",
        href:"shop"
    },
    'portfolio':{
        name:"Портфолио чну",
        img:"portfolio.jpg",
        title:"html + css",
        href:"chu_portfolio"
    },
    'pulse_animation':{
        name:"Обратная связь",
        img:"pulse_animation.jpg",
        title:"html + css",
        href:"pulse_animation"
    },
    'psuhologia':{
        name:"Психологія відповіді",
        img:"psuhologia.jpg",
        title:"html + css",
        href:"psuxologia"
    }
};

class Categoru { // клас генерует объекты на странице
    constructor(varName, rowName){
        this.name;
        this.imgSrc;
        this.title;
        this.href = "https://vaseklllm.github.io/sites/";

        var row = document.getElementById(rowName);
        for(let key in varName){
            this.name = varName[key].name;
            this.imgSrc = "main/img/sities/" + varName[key].img;
            this.title = "Used: " + varName[key].title;
            this.href = "https://vaseklllm.github.io/sites/" + varName[key].href;
            row.innerHTML += "<div class=\"conteiner\"><div class=\"block\"><img src=\""+ this.imgSrc +"\" alt=\""+ key +"\"><h3>"+this.name+"</h3><p>"+this.title+"</p><a href="+this.href+">Open</a>";
        }
    }
}

let sites = new Categoru(rowSites, "row-sites");

let other = new Categoru(rowOther, "row-other");