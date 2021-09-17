var seccion = document.getElementById("seccion")

        var nombres=[{ nombre:"hamburguesa",link: "hamburguesa"},{ nombre:"fideos",link: "google"},{ nombre:"sushi",link: "youtube"}]

        for (i=0;i<3;i++) {

            fetch('https://example.com/movies.json')
                .then(response => response.json())
                .then(data => console.log(data));

        seccion.innerHTML+=`

        <li> 
            <a href="https://www.${nombres[i].link}.com"> 
                ${nombres[i].nombre} 
            </a>
        </li>
        
        `
        }