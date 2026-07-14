function generarTablas() {
    
    let contenido = "";
    let cmpNumero = document.getElementById("txtTabla")
    let strNumero = cmpNumero.value;
    let numero=parseInt(strNumero);

    let tabla = numero;

    let contenedor = document.getElementById("tblResultado");
    for (let i = 1; i <= 10; i++) {

        contenido += `
            <tr>
                <td>${tabla} × ${i}</td>
                <td>${tabla * i}</td>
            </tr>`;
    }
    contenedor.innerHTML = contenido;
}