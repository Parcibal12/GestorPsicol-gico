export class AppSidebar extends HTMLElement {
    connectedCallback() {
        fetch('./blocks/sidebar/sidebar.html')
            .then(respuesta => respuesta.text())
            .then(html => {
                this.innerHTML = html;
                
                if (window.lucide) {
                    window.lucide.createIcons({ root: this });
                }
            })
            .catch(error => console.error("Error cargando el Sidebar:", error));
    }
}

customElements.define('app-sidebar', AppSidebar);