function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            console.log('data',data)
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el componente:', error));
}

// Ejemplo de cómo podrías usar la función loadPage
loadComponent('header','src/js/ui/components/layouts/header/header.html')