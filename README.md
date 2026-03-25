# Sistema de reserva de citas para psicólogo - MVP

## 1. Análisis del problema
Los psicólogos independientes sufren de desorganización al usar agendas físicas o herramientas no especializadas, lo que provoca pérdida de tiempo, cruce de horarios y mala gestión del historial clínico. Este sistema centraliza la agenda en una plataforma digital de un solo vistazo, optimizando el tiempo del profesional.

## 2. Diseño de la solución
Se diseñó una interfaz minimalista enfocada en la usabilidad. Se utilizó **Tailwind CSS** para una maquetación limpia y libre de distracciones, priorizando el calendario semanal como el núcleo del sistema. La navegación utiliza un menú lateral fijo para maximizar el espacio de trabajo.

## 3. Desarrollo y arquitectura técnica
El proyecto se desarrolló utilizando una arquitectura **SPA** nativa para evitar recargas de página y mejorar la experiencia de usuario.
* **Frontend:** HTML5, Vanilla JavaScript, Tailwind CSS. Se modularizó la interfaz usando Web Components (Light DOM).
* **Motor de calendario:** Integración de la librería FullCalendar.
* **Backend y base de datos:** Supabase (PostgreSQL) para la persistencia de datos en la nube.
* **Integración:** API REST de Supabase con peticiones asíncronas (`async/await`) para el CRUD de citas.

## 4. Validación básica y alcance (HU cumplidas)
Para este MVP, se validó y completó el flujo crítico de la agenda, cumpliendo con los siguientes 6 requerimientos:

1. **Visualizar los turnos en una vista semanal:** Vista `timeGridWeek` implementada por defecto.
2. **Visualizar los turnos ordenados cronológicamente:** Renderizado exacto de hora de inicio y fin desde Supabase.
3. **Resaltar el día actual:** Línea de tiempo real activada en la interfaz.
4. **Visualizar horarios disponibles y ocupados:** Diferenciación visual de bloques vacíos y asignados.
5. **Registrar un turno (fecha, hora, nombre):** Creación rápida mediante clic directo en el bloque horario vacío (Time-blocking).
6. **Eliminar definitivamente un turno:** Borrado directo desde la base de datos al hacer clic sobre una sesión, previa confirmación de seguridad.

### HU Faltantes
Las siguientes historias son las que falta implementar:
* Login y autenticación.
* CRUD completo del directorio de pacientes.
* Módulo clínico (Registro y exportación de notas de evolución en PDF).
* Validaciones avanzadas.

## 5. Instrucciones de Ejecución

El proyecto utiliza ES Modules nativos (`type="module"`) y llamadas a una API externa (Supabase), por lo que debe ejecutarse a través de un servidor local. 

**Pasos de ejecución:**
1. Descomprimir el archivo `.zip` o clonar el repositorio.
2. Abrir la carpeta raíz del proyecto.
3. Tener el Live Server instalado.
4. El sistema se abrirá automáticamente en el navegador por defecto.

**Nota sobre la base de datos:** El sistema ya se encuentra conectado y autenticado con el entorno de producción en **Supabase**. No es necesario configurar variables de entorno locales ni levantar bases de datos adicionales para evaluar el registro, lectura y eliminación de citas.