console.log("Inicio de scrip");

setTimeout(() =>{
    console.log('Primer timeout')
}, 5000);

setTimeout(() =>{
    console.log('Segundo timeout')
}, 0);

setTimeout(() =>{
    console.log('Tercer timeout')
}, 0);

console.log("Fin del script")