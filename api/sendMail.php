<?php

function createEmail($name, $email, $subject, $body) {
    $year = date('Y');
    return "
    <!DOCTYPE html>
    <html lang=\"ru\">
    <head>
        <title>Для вас новое сообщение!</title>
        <style>
            .body {
                margin: 0 auto;
                min-width: 430px;
                width: 80%;
                font-size: 14px;
                border: 1px solid #E0E0E0;
                padding: 10px;
                border-radius: 5px;
            }
    
            .body__message p {
                text-align: justify;
                padding: 10px 15px;
                margin: 0;
            }
    
            hr {
                border-color: #E0E0E0;
                border-top: none;
            }
    
            small {font-size: 80%}
            .body__message_subject {font-size: 16px}
            .body__footer p {text-align: justify;}
        </style>
    </head>
    <body>
    <table class=\"body\">
        <tr>
            <td><strong>Для Вас новое сообщение от: $name <small>$email</small></strong></td>
        </tr>
        <tr>
            <td><hr></td>
        </tr>
        <tr class=\"body__message\">
            <td>
                <p>
                    <span class=\"body__message_subject\">$subject</span><br><br>
                    $body
                </p>
            </td>
        </tr>
        <tr>
            <td><hr></td>
        </tr>
        <tr class=\"body__footer\">
            <td>
                <p>Сообщение отправлено автоматически с сайта <a href=\"https://myinspire-ph.ru/contacts/\">MyInspire-ph.ru</a></p>
                <p>© $year MyInspire-ph.ru</p>
            </td>
        </tr>
    </table>
    </body>
    </html>
    ";
}

error_reporting(0);

try {
    header('Content-type: application/json');

    $to = '<yoskutik@gmail.com>, <tatiana.mix.1910@gmail.com>, <da_afo_w@mail.ru>, <tatiana@myinspire-ph.ru>';
    $subject = $_POST['subject'];
    $body = createEmail($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message']);
    $headers = "From: {$_POST['name']} <{$_POST['email']}>" . "\r\n" .
        "Reply-To: <{$_POST['email']}>" . "\r\n" .
        'Content-type: text/html; charset=UTF-8' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    $status = mail($to, $subject, $body, $headers);
} catch (Error $e) {
    if ($e) $status = !!$e;
}

if (!$status) http_response_code(400);

echo json_encode(['status' => $status ? 'OK' : 'ERROR']);

