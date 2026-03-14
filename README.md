# Gestor Psicológico - Módulo de Agenda

Este repositorio contiene el avance del módulo principal de agendamiento para el sistema de gestión psicológica. Está diseñado bajo una arquitectura modular (preparada para SPA) utilizando Vanilla JavaScript, sin depender de frameworks pesados, para maximizar el rendimiento.

## Características implementadas

* **Interfaz gráfica:** Vista de calendario interactivo (Mensual, Semanal, Diaria) utilizando **FullCalendar v6**.
* **Estilos:** Diseño limpio y responsivo utilizando **Tailwind CSS**.
* **Iconografía:** Implementación de **Lucide Icons** para una carga ligera.
* **Backend as a Service (BaaS):** Conexión asíncrona con **Supabase (PostgreSQL)**.
* **Base de datos:** Tabla `citas` configurada con políticas estrictas de seguridad (Row Level Security - RLS).
* **CRUD operativo:** * Lectura en tiempo real de citas agendadas.
  * Inserción de nuevas citas calculando correctamente el formato ISO según la vista (Día/Mes).
  * Eliminación de citas mediante interacción directa con los eventos del calendario.

## Stack ecnológico

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+).
* **Librerías locales:** FullCalendar, TailwindCSS (Standalone CLI/Script), Supabase JS Client.
* **Backend / DB:** Supabase / PostgreSQL.

## Instrucciones de Ejecución

Para ejecutar el proyecto en un entorno local:

1. Clonar el repositorio.
2. Abrir la carpeta raíz en Visual Studio Code.
3. Iniciar la extensión **Live Server** apuntando al archivo `index.html`.
   *(El sistema redirigirá automáticamente al dashboard de la agenda).*