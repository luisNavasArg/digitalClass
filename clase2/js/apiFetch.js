console.log('inicio');
fetch("https://pokeapi.co/api/v2/")
.then(response=>console.log(response))
.catch(err=>console.log(err))
console.log('fin');