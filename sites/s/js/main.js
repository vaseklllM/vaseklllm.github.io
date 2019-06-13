
$("#buy").click(function(){
    var name = $("#name"),
        phone = $("#phone"),
        arr = {
            "Имя пользователя" : name.val(),
            "Телефон" : phone.val(),
            "Сайт" : "http://ground-store.pp.ua/",
            "Назва товара" : "Золото",
        };
        

    if (checkName(name) == true && checkPhone(phone) == true){
        compress(arr);
    } else {
        console.log("NaN");
    }

});



function checkName (name){ // валидатор имени
    let spanName = $("#spanName");
    if (name.val() == ""){
        spanName.text("Введите имя:");
    } else if (name.val().search(/[0-9]/) != -1 ) {
        spanName.text("Имя не должно содержать цифры.");
    } else if (name.val().length < 3){
        spanName.text("Введите полное имя:")
    } else {
        spanName.text("");
        return true;
    }
    return false;
}

function checkPhone (phone){ // валидатор номера телефона
    let spanPhone = $("#spanPhone");
    if (phone.val() == ""){
        spanPhone.text("Введите телефон:");
    } else if (phone.val().length < 10 || phone.val().length > 13 || phone.val().length == 11 ){
        spanPhone.text("Номер телефона введен неправельно.");
    } else if(phone.val().search(/^[+]?[0-9]+$/) == -1 ){
        spanPhone.text("Номер телефона не должен содержать буквы или символы.");
    } else {
        spanPhone.text("");
        return true;
    }
    return false;
}
function compress (array){
    let message = "";
    for (let key in array){
        message += "<b>" + key + " :</b> " + array[key] + "%0A";
    }
    let xhr = new XMLHttpRequest(),
        body = "sms=" + encodeURIComponent(message);
    xhr.open("POST", "/s/php/telegram.php", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(body);
    xhr.onreadystatechange = function(){
        console.log(xhr.responseText);
    }
}