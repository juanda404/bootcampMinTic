function buscarDatos(){
    var busqueda = document.getElementById("busqueda").value.toLowerCase();

    fetch('/Ejerciciosjson/ejercicio3/datos.json')
    .then(response => response.json())
    .then(data => {
        var resultados = data.filter(item => item.nombre.toLowerCase().includes(busqueda));
        
        var resultadosDiv = document.getElementById("resultados");

        resultadosDiv.innerHTML = "";
        if (resultados.length > 0) {
            resultados.forEach(item => {
                resultadosDiv.innerHTML += `<p>Nombre: ${item.nombre}, Edad: ${item.edad}, Ciudad: ${item.ciudad}</p>`;
            });
        }else{
            resultadosDiv.innerHTML = "<p>No se encontraron resultados</p>";
        }
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
}