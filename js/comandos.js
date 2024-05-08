const boletines = [

    {
        "vigencia": "2024",
        "mes": "mayo",
        "titulo": "Desafios en tiempos de paz",
        "keys": "paz",
        "link": "boletin001",
    },
    {
        "vigencia": "2024",
        "mes": "mayo",
        "titulo": "Desafios en tiempos de paz",
        "keys": "eln",
        "link": "boletin001",
    },
    {
        "vigencia": "2023",
        "mes": "febrero",
        "titulo": "Relator",
        "keys": "gobierno",
        "link": "boletin001",
    },
    {
        "vigencia": "2024",
        "mes": "enero",
        "titulo": "Desafios colombia",
        "keys": "vida",
        "link": "boletin001",
    },

]



function leer_boletines() {

    const contenedor= document.getElementById("lstBoletines")
    contenedor.innerHTML=""

    let i=1
    DataPrincipal.forEach(boletin => {

        const elemento= document.createElement("a")
        elemento.className="navbar-brand mt-2";
        elemento.href=href=`./boletines/${boletin.link}.html`
        elemento.innerHTML=`
        <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Boletín ${i++}, ${boletin.mes}</div>
                    ${boletin.titulo}
                </div>
                <span class="badge text-bg-secondary rounded-pill">${boletin.vigencia}</span>
        </li>
        `
        contenedor.appendChild(elemento)

        

    })


}