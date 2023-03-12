import swal from 'sweetalert';

function mostrar(){
    swal("" ,{ 
        title:'¿ Quieres volver a jugar ?',
        buttons: [" OK DE ACUERDO ", "YA NO"]
        });
}
swal.fire({
    title: "Bien venido"
});

