export function validarCamposTurno(pacienteId, fecha, horaInicio, horaFin) {
    if (pacienteId === '' || fecha === '' || horaInicio === '' || horaFin === '') {
        return false;
    }
    
    if (horaInicio >= horaFin) {
        return false;
    }

    return true;
}