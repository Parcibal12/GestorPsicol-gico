import { supabase } from '../../services/supabase.js';

let calendar;

export function inicializarCalendario() {
    const calendarEl = document.getElementById('calendario');
    
    if (!calendarEl) return; 

    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        locale: 'es',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        buttonText: {
            today: 'Hoy', month: 'Mes', week: 'Semana', day: 'Día'
        },
        allDaySlot: false,
        slotMinTime: '08:00:00',
        slotMaxTime: '20:00:00',
        height: '100%',
        nowIndicator: true,
        eventClassNames: 'cita-estandar', 

        events: async function(info, successCallback, failureCallback) {
            try {
                const { data, error } = await supabase
                    .from('citas')
                    .select('id, paciente_id, fecha, hora_inicio, hora_fin');

                if (error) throw error;

                const eventos = data.map(cita => ({
                    id: cita.id,
                    title: cita.paciente_id, 
                    start: `${cita.fecha}T${cita.hora_inicio}`,
                    end: `${cita.fecha}T${cita.hora_fin}`
                }));

                successCallback(eventos);
            } catch (err) {
                console.error("Error cargando eventos:", err);
                failureCallback(err);
            }
        },

        dateClick: function(info) {
            if (info.allDay || !info.dateStr.includes('T')) {
                alert(" Por favor, haz clic en un recuadro de hora específica (ej: 10:00 AM), no en la cabecera del día.");
                return;
            }

            const nombre = prompt("Nombre del paciente para agendar en esta hora:");
            if (nombre) {
                guardarCitaRapida(nombre, info.dateStr);
            }
        },

        eventClick: async function(info) {
            const confirmacion = confirm(`¿Deseas eliminar la sesión de ${info.event.title}?`);
            if (confirmacion) {
                const { error } = await supabase
                    .from('citas')
                    .delete()
                    .eq('id', info.event.id);

                if (!error) {
                    calendar.refetchEvents();
                } else {
                    alert("Error al eliminar la cita.");
                }
            }
        }
    });

    calendar.render();
} 
async function guardarCitaRapida(nombre, startStr) {
    try {
        if (!startStr.includes('T')) {
            console.error("Formato de fecha inválido recibido de FullCalendar:", startStr);
            return; 
        }

        const fecha = startStr.split('T')[0];
        const hora_inicio = startStr.split('T')[1].substring(0, 5); 
        
        const [horas, minutos] = hora_inicio.split(':');
        const hora_fin = `${String(Number(horas) + 1).padStart(2, '0')}:${minutos}`;

        const { error } = await supabase
            .from('citas')
            .insert([
                { 
                    paciente_id: nombre, 
                    fecha: fecha, 
                    hora_inicio: hora_inicio,
                    hora_fin: hora_fin
                }
            ]);

        if (error) throw error;

        calendar.refetchEvents(); 
    } catch (err) {
        console.error("Error guardando cita rápida:", err);
        alert("No se pudo guardar la cita.");
    }
}