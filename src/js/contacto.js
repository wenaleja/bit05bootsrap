const $form = document.getElementById('form');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    const nombre = $form.nombre.value;
    const correo = $form.correo.value;
    const telefono = $form.telefono.value;
    const asunto = $form.asunto.value;
    const mensaje = $form.mensaje.value;

    localStorage.setItem('nombre', nombre)
    localStorage.setItem('correo', correo)
    localStorage.setItem('telefono',telefono)
    localStorage.setItem('asunto', asunto)
    localStorage.setItem('mensaje', mensaje);
    $form.reset();
} 