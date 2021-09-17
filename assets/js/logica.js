var ul = document.getElementById("loop_lista_de_canciones_reproductor_big")

        var canciones=[{nombre:"Black Hole Sun",duracion: "0:32"},{nombre:"Work",duracion: "0:27"},{nombre:"Lullaby",duracion: "0:30"},{nombre:"The Passanger",duracion: "0:30"},{nombre:"Celebrity Skin",duracion: "0:32"},{nombre:"Creep",duracion: "0:30"},{nombre:"Epic",duracion: "0:30"},{nombre:"Reptilia",duracion: "0:30"},{nombre:"Go With A Flow",duracion: "0:30"},{nombre:"Electric Version",duracion: "0:31"}]

        for (i=0;i<10;i++) {

        ul.innerHTML+=`

        <li>
        <h3><span>${i+1}.</span>${canciones[i].nombre}</h3><span>${canciones[i].duracion}</span>
        <a class="reproducir_pausar_reproductor_big">
           <i class="fas fa-play"><audio src="https://bridge217.qodeinteractive.com/wp-content/uploads/2018/04/Black-hole-sun.mp3"></audio></i>
        </a>
        <a class="video_reproductor_big" href="https://vimeo.com/33730560">
            <i class="fa fa-video-camera" aria-hidden="true"></i>
        </a>
        </li>
        
        `
        }