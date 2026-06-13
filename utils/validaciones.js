export function validarCamposTurno(pacienteId, fecha, horaInicio, horaFin) {
    const camposIncompletos = !pacienteId || !fecha || !horaInicio || !horaFin;
    if (camposIncompletos) return false;

    const rangoInvalido = horaInicio >= horaFin;
    if (rangoInvalido) return false;

    return true;
}

export function esNotaEditable(fechaCreacion, fechaActual) {
    const LIMITE_HORAS_EDICION = 24;
    const MILISEGUNDOS_POR_HORA = 1000 * 60 * 60;
    
    const diferenciaHoras = (fechaActual - fechaCreacion) / MILISEGUNDOS_POR_HORA;
    
    return diferenciaHoras <= LIMITE_HORAS_EDICION;
}