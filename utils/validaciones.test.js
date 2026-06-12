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