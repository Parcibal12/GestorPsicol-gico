import { validarCamposTurno } from './validaciones.js';

test('Debería retornar falso (invalido) si falta el nombre del paciente', () => {
    const resultado = validarCamposTurno('', '2026-10-10', '10:00', '11:00');
    expect(resultado).toBe(false); 
});

test('Debería retornar verdadero (valido) si todos los campos están llenos', () => {
    const resultado = validarCamposTurno('Juan Perez', '2026-10-10', '10:00', '11:00');
    expect(resultado).toBe(true);
});