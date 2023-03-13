const btnLanzardados = document.getElementById("lanzardados");
btnLanzardados.addEventListener('click', dados);
var suma = 0;
var sumatoria = document.getElementById("sumatoria");
//FUNCIÓN QUE ASIGNA VALOR A LOS DADOS
function dados() {
    for (i = 1; i <= 5; i++) {
        let aleatorio = Math.floor(Math.random() * 6) + 1;
        //AGREGAR VARIABLE DE SUMATORIA
        suma = suma + aleatorio;
        document.getElementById("dado" + i).innerHTML = aleatorio;
    }
    sumatoria.value = suma;
    btnLanzardados.disabled = true;
    primo();
}

function esPrimo(num) {
    if (num<=1 || num%1) {
        return false;
    }
    let m=Math.sqrt(num);
    for (let i=2; i<=m; i++) {
        if (num%i==0) {
            return false;
        }
    }
    return true;
}

function primo()
{   
    let valor=parseInt(document.getElementById("sumatoria").value);
    if (esPrimo(valor)) {
        document.getElementById("resultado").innerHTML="El numero "+valor+" SI es Primo";
    document.getElementById("mensaje1").innerHTML="GANASTE";
    Swal.fire({
        title: "Quieres volver a jugar?",
        confirmButtonText:'SI',
        
    })
    } else {
        document.getElementById("resultado").innerHTML="El numero "+valor+" NO es Primo";
        document.getElementById("mensaje2").innerHTML="PERDISTE";
        Swal.fire({
            title: "Quieres volver a jugar?",
            confirmButtonText:'SI',
        })
    }
}


