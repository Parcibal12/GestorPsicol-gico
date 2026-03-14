const SB_URL = 'https://pvznskelmvmobudrodmw.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2em5za2VsbXZtb2J1ZHJvZG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjU5ODUsImV4cCI6MjA4ODQwMTk4NX0.2Bk-GQn9QqBxDkEUfHuFGPXR7WOBUH7Wjy8iFZH0MHs';

let supabaseClient;
let calendar;

document.addEventListener('DOMContentLoaded', function() {
    if (window.supabase) {
        supabaseClient = window.supabase.createClient(SB_URL, SB_KEY);
    }

    const calendarEl = document.getElementById('calendario');

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

        events: async function(info, successCallback, failureCallback) {
            try {
                const { data, error } = await supabaseClient
                    .from('citas')
                    .select('*');

                if (error) throw error;

                const eventos = data.map(cita => ({
                    id: cita.id,
                    title: cita.paciente,
                    start: cita.fecha_inicio,
                    color: cita.color || '#4f46e5'
                }));

                successCallback(eventos);
            } catch (err) {
                failureCallback(err);
            }
        },

        dateClick: function(info) {
            const nombre = prompt("Nombre del paciente para agendar en esta hora:");
            if (nombre) {
                guardarCita(nombre, info.dateStr);
            }
        },

        eventClick: async function(info) {
            const confirmacion = confirm(`Deseas eliminar la sesión de ${info.event.title}?`);
            if (confirmacion) {
                const { error } = await supabaseClient
                    .from('citas')
                    .delete()
                    .eq('id', info.event.id);

                if (!error) {
                    calendar.refetchEvents();
                }
            }
        }
    });

    calendar.render();
});

async function guardarCita(nombre, fechaISO) {
    try {
        const { error } = await supabaseClient
            .from('citas')
            .insert([
                { 
                    paciente: nombre, 
                    fecha_inicio: fechaISO, 
                    color: '#4f46e5' 
                }
            ]);

        if (error) throw error;

        calendar.refetchEvents(); 
    } catch (err) {
        alert("No se pudo guardar la cita.");
    }
}