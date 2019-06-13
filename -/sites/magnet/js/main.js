// ---back Timer
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
   
function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
var deadline = new Date(Date.parse(new Date()) + backTimers * 1000); 
initializeClock('clockdiv', deadline);

// back Timer---


//   ---scroll

function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
        scrollTop: $(id).offset ().top - offset
    }, 700);
    return false;
}

//   scroll---

var product = {
    gold : {
        imegesUrl : 'img/product/gold.png',
        name : 'Золото',
        description : 'Магнитный держатель для телефона с клеящейся поверхностью',
        price : 175,
        badPrice : 350,
        existence : true
    },
    pinkGold : {
        imegesUrl : 'img/product/Pink-gold.png',
        name : 'Розовое золото',
        description : 'Магнитный держатель для телефона с клеящейся поверхностью',
        price : 175,
        badPrice : 350,
        existence : true
    },
    silver : {
        imegesUrl : 'img/product/Silver.png',
        name : 'Серебристый',
        description : 'Магнитный держатель для телефона с клеящейся поверхностью',
        price : 175,
        badPrice : 350,
        existence : true
    },
    black : {
        imegesUrl : 'img/product/black.png',
        name : 'Черный',
        description : 'Магнитный держатель для телефона с клеящейся поверхностью',
        price : 175,
        badPrice : 350,
        existence : true
    },
    red : {
        imegesUrl : 'img/product/red.png',
        name : 'Красный',
        description : 'Магнитный держатель для телефона с клеящейся поверхностью',
        price : 175,
        badPrice : 350,
        existence : true
    },
    pinkGoldMini : {
        imegesUrl : 'img/product/Pink-gold-mini.png',
        name : 'Розовое золото мини',
        description : 'Магнитный держатель для телефона с прищепкой',
        price : 145,
        badPrice : 300,
        existence : true
    },
    silverMini : {
        imegesUrl : 'img/product/Silver-mini.png',
        name : 'Серебристый мини',
        description : 'Магнитный держатель для телефона с прищепкой',
        price : 145,
        badPrice : 300,
        existence : true
    },
    blackMini : {
        imegesUrl : 'img/product/black-mini.png',
        name : 'Черный мини',
        description : 'Магнитный держатель для телефона с прищепкой',
        price : 145,
        badPrice : 300,
        existence : true
    }
}  

var prod = document.getElementById('product-sector');
function productSector(){
    for(var key in product ){
        prod.innerHTML += '<div class="product"><img src="'+ product[key].imegesUrl +'" alt="gold"><h3>' +product[key].name +'</h3><p class="description">'+ product[key].description+'</p><p class="price"><span class="newPrice">'+product[key].price+' грн/шт</span><span class="badPrice">'+product[key].badPrice+' грн/шт</span></p><button onclick="buy()" id="'+key+'">Заказать</button></div>';
    }    
}
productSector();
function buy(){
    var nameBuyProduct = event.currentTarget.id;    
    document.getElementById("buyCheckout").style.display = "block";
    document.getElementById("productName").innerHTML = product[nameBuyProduct].name;
}
document.getElementById("close").onclick = function(){
    document.getElementById("buyCheckout").style.display = "none";
}

// --- проверка на валидность и отправка
document.getElementById("submit").onclick = function(){   
    var re = /^[\+\d\(\)\ -]{9,12}\d$/;
    var myPhone = document.getElementById('inputPhone').value;
    var valid = re.test(myPhone); 
    if (document.getElementById("inputName").value == "" || document.getElementById("inputPhone").value == ""){
        alert ("Поле \"Имя\" и \"Номер телефона\" обязательно для заполнения");
    } else if (!valid) {
        alert('Номер телефона введен неправильно!');
    } 
    else {
        var zakaz = {
            name : document.getElementById("inputName").value,
            phone : document.getElementById("inputPhone").value,
            productName : document.getElementById("productName").innerHTML
        }
            // -- отправка на сервер
            var xhr = new XMLHttpRequest();
            var body = "name=" + encodeURIComponent(zakaz.name) + "&phone=" + encodeURIComponent(zakaz.phone) + "&productName=" + zakaz.productName;
            xhr.open("POST", "../php/seccessfulBuy.php", true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            
            xhr.send(body);  
            xhr.onreadystatechange = function(){
                console.log(xhr.responseText);
            }
            // отправка на сервер --
        document.getElementById("buyCheckout").style.display = "none";
        // alert("Спасибо за заказ");
        location.href = 'struct/seccess.html';
    } 
}
//  проверка на валидность и отправка ---