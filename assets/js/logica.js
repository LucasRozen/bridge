var ul1 = document.getElementById("loop_lista_de_canciones_reproductor_big");

        var canciones=[{nombre:"Black Hole Sun",duracion: "0:32"},{nombre:"Work",duracion: "0:27"},{nombre:"Lullaby",duracion: "0:30"},{nombre:"The Passanger",duracion: "0:30"},{nombre:"Celebrity Skin",duracion: "0:32"},{nombre:"Creep",duracion: "0:30"},{nombre:"Epic",duracion: "0:30"},{nombre:"Reptilia",duracion: "0:30"},{nombre:"Go With A Flow",duracion: "0:30"},{nombre:"Electric Version",duracion: "0:31"}];

        for (i=0;i<10;i++) {

        ul1.innerHTML+=`

        <li>
        <h3><span>${i+1}.</span>${canciones[i].nombre}</h3><span>${canciones[i].duracion}</span>
        <a class="reproducir_pausar_reproductor_big">
            <i class="fas fa-play"><audio src=""></audio></i>
        </a>
        <a class="video_reproductor_big" href="https://vimeo.com/33730560">
            <i class="fa fa-video-camera" aria-hidden="true"></i>
        </a>
        </li>
        
        `
        }
var ul2 = document.getElementById("tickets_evento");

        var fechas_evento=[{numero_fecha:"10",mes_fecha:"JUN",dia_fecha:"SUN",nombre_concierto:"Gärdet Open Air Stockholm – Sweden"},{numero_fecha:"",mes_fecha:"",dia_fecha:"",nombre_concierto:""},{numero_fecha:"",mes_fecha:"",dia_fecha:"",nombre_concierto:""},{numero_fecha:"",mes_fecha:"",dia_fecha:"",nombre_concierto:""},{numero_fecha:"",mes_fecha:"",dia_fecha:"",nombre_concierto:""},{numero_fecha:"",mes_fecha:"",dia_fecha:"",nombre_concierto:""},{numero_fecha:"",mes_fecha:"",dia_fecha:"",nombre_concierto:""},{numero_fecha:"",mes_fecha:"",dia_fecha:"",nombre_concierto:""},{numero_fecha:"",mes_fecha:"",dia_fecha:"",nombre_concierto:""},{numero_fecha:"",mes_fecha:"",dia_fecha:"",nombre_concierto:""}];

        for (i=0;i<10;i++){

            ul2.innerHTML+=`

            <li> 
                <div class="numero_fecha"><span>${fechas_evento[i].numero_fecha}</span></div>
                <div class="dia_fecha"><span>${fechas_evento[i].mes_fecha}</span><span>${fechas_evento[i].dia_fecha}</span></div>
                <div class="nombre_concierto"><h5>${fechas_evento[i].nombre_concierto}</h5></div>
                <div class="buy_tickets"><span>BUY TICKETS</span></div>
            </li>
            
            `            

        }