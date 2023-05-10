document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        events: JSON.parse(localStorage.getItem('reservas')) || []
    });
    calendar.render();

    // Agregar evento al calendario cuando se envíe el formulario
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var comensales = document.getElementById('comensales').value;
        var telefono = document.getElementById('telefono').value;
        var idioma = document.getElementById('idioma').value;
        var fecha = document.getElementById('fecha').value;
        var hora = document.getElementById('hora').value;

        var evento = {
            title: nombre,
            start: fecha + 'T' + hora,
            extendedProps: {
                email: email,
                comensales: comensales,
                telefono: telefono,
                idioma: idioma
            }
        };
        calendar.addEvent(evento);

        // Guardar reserva en localStorage
        var reservas = JSON.parse(localStorage.getItem('reservas')) || [];
        reservas.push(evento);
        localStorage.setItem('reservas', JSON.stringify(reservas));

        // Limpiar formulario
        form.reset();
    });
}); 
