document.addEventListener('DOMContentLoaded', () => {
    
    flatpickr("#input-fecha", {
        locale: "es",
        dateFormat: "d/m/Y",
        minDate: "today",
        allowInput: true
    });

    flatpickr("#input-hora-inicio", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        allowInput: true
    });

    flatpickr("#input-hora-fin", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        allowInput: true
    });

});