var persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    hobbies: ["leer", "viajar", "correr"]
};
console.log(persona.nombre); // Salida: Juan
console.log(persona.edad);   // Salida: 30
console.log(persona.ciudad); // Salida: Madrid
console.log(persona.hobbies); // Salida: ["leer", "viajar", "correr"]


var personaJSON = JSON.stringify(persona);
console.log(personaJSON);
// Salida: {"nombre":"Juan","edad":30,"ciudad":"Madrid","hobbies":["leer","viajar","correr"]}

var cadenaJSON = '{"nombre":"Ana","edad":25,"ciudad":"Barcelona","hobbies":["pintar","bailar"]}';
var personaObj = JSON.parse(cadenaJSON);
console.log(personaObj.nombre); // Salida: Ana
console.log(personaObj.edad);   // Salida: 25


function mostrarDatos () {
    var persona1 = {
        nombre: "Juan",
        edad: 30,
        ciudad: "Madrid",
        hobbies: ["leer", "viajar", "correr"]
    };

            var resultado = "Nombre: " + persona.nombre + "\n";
            resultado += "Edad: " + persona.edad + "\n";
            resultado += "Ciudad: " + persona.ciudad + "\n";
            resultado += "Hobbies: " + persona.hobbies.join(", ") + "\n";
            document.getElementById("resultado").textContent = resultado;

};