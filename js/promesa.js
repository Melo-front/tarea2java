const miPromesa = new Promise((resolve, reject) => {
    let exito = true;

    if (exito) {
        resolve("Todo salió bien");
    } else {
        reject("Hubo un error");
    }
});

miPromesa
    .then(resultado => {
        console.log(resultado); 
    })
    .catch(error => {
        console.log(error); 
    });

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Datos cargados");
    }, 2000);
});

promesa.then(data => console.log(data));