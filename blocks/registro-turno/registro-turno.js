import { supabase } from '../../services/supabase.js';


document.addEventListener('DOMContentLoaded', () => {    
    
    flatpickr("#input-fecha", {
        locale: "es",
        dateFormat: "d/m/Y",
        minDate: "today",
        allowInput: true
    });


    const configuracionHora = {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        allowInput: true
    };

    flatpickr("#input-hora-inicio", configuracionHora);
    flatpickr("#input-hora-fin", configuracionHora);

    
    const formularioCita = document.getElementById('formulario-cita');

    formularioCita.addEventListener('submit', function(evento) {
        
        evento.preventDefault();

        const pacienteId = document.getElementById('select-paciente').value;
        const fecha = document.getElementById('input-fecha').value;
        const horaInicio = document.getElementById('input-hora-inicio').value;
        const horaFin = document.getElementById('input-hora-fin').value;

        if (pacienteId === '' || fecha === '' || horaInicio === '' || horaFin === '') {
            alert('Completa todos los campos obligatorios (*)');
            return;
        }

        alert('Turno validado correctamente');        
        formularioCita.reset();
    });
});