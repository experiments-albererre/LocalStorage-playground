// LocalStore
localStorage.setItem('pepe', JSON.stringify({name: "Pepe", origin: "Madrid"}));

console.log(JSON.parse(localStorage.getItem('pepe')));

// session storage
sessionStorage.setItem('pepe', JSON.stringify({name: "PepeSession", origin: "PepeSession"}));

console.log(JSON.parse(sessionStorage.getItem('pepe')));

// we handle this information as Strings! (both locastore and sessionstore)
