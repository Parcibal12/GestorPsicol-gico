import { validarCamposTurno } from './validaciones.js';

describe('HU-06: Agendar una nueva sesión', () => {
    test('Debería retornar falso (invalido) si falta el nombre/ID del paciente', () => {
        const resultado = validarCamposTurno('', '2026-10-10', '10:00', '11:00');
        expect(resultado).toBe(false); 
    });

    test('Debería retornar falso (invalido) si falta la fecha de la sesión', () => {
        const resultado = validarCamposTurno('Juan Perez', '', '10:00', '11:00');
        expect(resultado).toBe(false); 
    });

    test('Debería retornar falso (invalido) si falta la hora de inicio o fin', () => {
        const resultado = validarCamposTurno('Juan Perez', '2026-10-10', '', '');
        expect(resultado).toBe(false); 
    });

    test('Debería retornar verdadero (valido) si todos los campos están llenos', () => {
        const resultado = validarCamposTurno('Juan Perez', '2026-10-10', '10:00', '11:00');
        expect(resultado).toBe(true);
    });

    test('CA 4: Debería retornar falso si la hora de fin es anterior o igual a la hora de inicio', () => {
        const resultado = validarCamposTurno('Juan Perez', '2026-10-10', '10:00', '09:00');        
        expect(resultado).toBe(false);
    });

});

describe('HU-11: Editar nota de evolución', () => {
    test('CA 2: Debería retornar falso si la nota tiene más de 24 horas de antigüedad', () => {

        const { esNotaEditable } = require('./validaciones.js');
        
        const fechaCreacion = new Date('2026-06-10T10:00:00'); 
        const fechaActual = new Date('2026-06-12T10:00:00');
        
        const resultado = esNotaEditable(fechaCreacion, fechaActual);
        
        expect(resultado).toBe(false);

    });
});