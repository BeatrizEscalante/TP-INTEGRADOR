function generarPDF() {
    //obtengo los valores del form
    var nombre1 = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido').value;
    var email1 = document.getElementById('email').value;
    var reclamo1 = document.getElementById('reclamo').value;

    //crear un doc PDF
    var doc = new jsPDF();

    //Agrego el contenido al PDF
    doc.text(20, 20, 'Formulario de reclamo');
    doc.text(20, 30, 'Nombre: ' + nombre1);
    doc.text(20, 40, 'Apellido: ' + apellido1);
    doc.text(20, 50, 'Email: ' + email1);
    doc.text(20, 60, 'Reclamo: ' + reclamo1);
    doc.text(20, 70, 'Gracias por su tiempo. Le responderemos lo antes posible')

    
    //Guardar el PDF como archivo 
    doc.save('reclamo.pdf');

}  

document.addEventListener('DOMContentLoaded', function(){
    $('#contacto').validate({
        rules: {
            nombre: 'required',
            email: {
                required: true,
                email: true
            },
            servicio: 'required'
        },
        messages: {
            nombre: 'Por favor ingrese su nombre',
            email:{
                required: 'Por favor ingrese su email',
                email: 'Por favor ingrese un email valido'
            },
            servicio:'Por favor especifique que servicio quiere cotizar'
        },
        submitHandler: function() {
            //obtengo los valores del formulario
            var nombre = $('#nombre').val();
            var email = $('#email').val();
            var servicio = $('#servicio').val();

            //peticion AJAX para enviar los dator al serv
            $.ajax({
              url:'https://reqres.in/api/users?page=2',
              method:'POST',
              data: {
                nombre: nombre,
                email: email,
                servicio: servicio
              },
              success: function(response){
                //respuesta del serv
                console.log('Exito', response);
                alert('Su peticion fue enviada con exito!');
              },
              error: function(error){
                console.log('error', error);
                alert('Error al enviar la peticion.Intentelo nuevamente');

              
              }

            })
        }

    })
})