
// Importacion del modulo Express bajo el alias express.  (como se hace en JavaScript)
const express = require('express');
// Generamos una nueva instancia de express
const app = express();
// Se define una constante el numero de puerto sobre el que se va a ejecutar el servidor.
const port = 3000;


//Se define el metodo de escucha de tipo GET en la ruta raiz ("/") y la respuesta que se dara a esta peticion,
// en este caso, se devuelve un mensaje con el texto "Hello World".
app.get("/", (req, res) => {                //La aplicacion, va escuchar la peticion de tipo Get, en la ruta "/" (es decir en la ruta raiz) y una funciona anonima que recibe dos parametros: un req(request o peticion) y un res (respond o respuesta).
    res.send("Hello Word!");                //Cuando llega la peticion a la ruta "/" con el metodo (req,res) se da como respuesta para este ejemplo "Hello World".
});

// Se coloca a escuchar (ejecutar) el servidor web con el uso del metodo listen.
// El metodo listen recibe dos parametros; el puerto en el que va a escuchar el servidor y una funcion anonima con una ejecucion de codigo al momento de montar el servidor.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


