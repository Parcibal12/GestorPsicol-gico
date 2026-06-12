export function validarCamposTurno(pacienteId, fecha, horaInicio, horaFin) {
    const camposIncompletos = !pacienteId || !fecha || !horaInicio || !horaFin;
    if (camposIncompletos) return false;

    const rangoInvalido = horaInicio >= horaFin;
    if (rangoInvalido) return false;

    return true;
}