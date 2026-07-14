function generarTablas(){
    let tabla = 5;
    let contenido = "";

    let contenedor = document.getElementById("tblResultado");
    for(let i = 1; i <= 10; i++){

        contenido += `
            <tr>
                <td>${tabla} × ${i}</td>
                <td>${tabla * i}</td>
            </tr>`;
    }
    contenedor.innerHTML = contenido;
}