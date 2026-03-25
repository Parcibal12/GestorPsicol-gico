
import { inicializarCalendario } from './blocks/dashboard/dashboard.js'; 

export class Router {
    static async cargarDashboard() {
        const contenedor = document.getElementById('app-content');
        
        try {
            const respuesta = await fetch('./blocks/views/dashboard-vista.html');
            const html = await respuesta.text();
            
            contenedor.innerHTML = html;
            
            inicializarCalendario();
            
        } catch (error) {
            console.error("Error en el Router:", error);
        }
    }
}