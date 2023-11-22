<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $telefono = htmlspecialchars($_POST["telefono"]);
    $correo = htmlspecialchars($_POST["correo"]);
    $tema = htmlspecialchars($_POST["tema"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    // Procesa los datos y envía el correo electrónico

    // Utilizando la función mail() de PHP
    $destinatario = "carlosklema@hotmail.com";
    $asunto = "Nuevo mensaje de contacto";
    $cuerpo = "Nombre: $nombre\nTeléfono: $telefono\nCorreo: $correo\nTema: $tema\nMensaje: $mensaje";
    mail($destinatario, $asunto, $cuerpo);
}
?>
