
// Cargar informacion de la base de datos de registros
const idcliente="622309440553-t16k7fb2t1k83l4uka2gk1cttmogsfmq.apps.googleusercontent.com"
const claveapi="AIzaSyDoVYGzzlbc70FhKn1fD958hNf0EbP0QXc"
function loadDataBase(id, hoja, query = "Select *") {
    //Carga base de datos de google sheets y la convierte a una lista

    //let query = "Select A,B,C,D,E"
    return fetch(`https://docs.google.com/spreadsheets/d/${id}/gviz/tq?&sheet=${hoja}&tq=${encodeURIComponent(query)}`)
        .then(response => response.text())
        .then(text => {
            //Cargar Datos
            const rawdata = text.slice(47, -2);
            const data = ((JSON.parse(rawdata)).table);

            //Titulos de columnas y Obtener columnas
            const cols = (data.cols);
            const Keys = cols.map(col => col.label);
            const rows = data.rows;

            //Regresar Objeto (Diccionario Json)
            const Objeto = [];
            for (const row of rows) {
                const raw = (row.c)
                const rowinfo = raw.map(dic => (dic && dic.v) ? dic.v : "No registra");
                const caso = Object.fromEntries(Keys.map((key, i) => [key, rowinfo[i]]));
                Objeto.push(caso)
            }
            return Objeto
        })
}

// Datos principales
let DataPrincipal;
loadDataBase("1d-GR529zaMZk-QssPt2vl7sE6h0IMhLp-rXCdNqvqfU", "principal").then(objeto => {
    DataPrincipal = [...objeto].sort((a, b) => b.vigencia - a.vigencia);
})

let DataTextos;
loadDataBase("1d-GR529zaMZk-QssPt2vl7sE6h0IMhLp-rXCdNqvqfU", "textos").then(objeto => {
    DataTextos = [...objeto].sort((a, b) => b.indice - b.indice);
})

