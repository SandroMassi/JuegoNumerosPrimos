// Obtener el botón y el párrafo donde se mostrará el resultado
let boton = document.getElementById("lanzar-dados");
let resultado = document.getElementById("resultado");

// Agregar un evento click al botón
boton.addEventListener("click", function() {
  // Generar valores aleatorios para dos dados
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  
  // Calcular la suma de los valores generados
  let suma = dado1 + dado2;
  
  // Mostrar el resultado en la página
  resultado.innerHTML = "Dado 1: " + dado1 + "<br>" +
                         "Dado 2: " + dado2 + "<br>" +
                         "La suma de los valores es: " + suma;
});
