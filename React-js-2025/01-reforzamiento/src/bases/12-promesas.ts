const promesas = new Promise <number> ((resolve,reject) => {

    setTimeout(() => {
        resolve(100);
        reject('Error en la promesa');
    }, 2000);

});

promesas.then(
    (resultado) => {
        console.log('Termino la promesa', resultado);
    }).catch(
    (error) => {
        console.warn('Error en la promesa', error);
    }).finally(() => {
        console.log('Finalizó la promesa');
    }
);