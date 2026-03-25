// app.js
import './blocks/sidebar/sidebar.js';
import './blocks/header/header.js'; 
import { Router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    Router.cargarDashboard();
});