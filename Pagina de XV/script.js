// script.js  
document.getElementById('uploadForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Evita que el formulario se envíe  

    const fileInput = document.getElementById('media');  
    const files = fileInput.files;  
    const gallery = document.getElementById('gallery');  

    // Limpiar la galería antes de agregar nuevos medios  
    gallery.innerHTML = '';  

    // Mostrar archivos seleccionados  
    for (let i = 0; i < files.length; i++) {  
        const file = files[i];  
        const reader = new FileReader();  

        reader.onload = function(e) {  
            let mediaElement;  
            if (file.type.startsWith('image/')) {  
                mediaElement = document.createElement('img');  
                mediaElement.src = e.target.result;  
            } else if (file.type.startsWith('video/')) {  
                mediaElement = document.createElement('video');  
                mediaElement.src = e.target.result;  
                mediaElement.controls = true; // Agrega controles al video  
            }  
            gallery.appendChild(mediaElement);  
        };  
        
        reader.readAsDataURL(file); // Lee el archivo como un URL de datos  
    }  
});  