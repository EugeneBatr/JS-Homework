///////////////////////////1\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


// const getPokemons = async() => {
//         try {
//                 const response = await fetch(baseUrl).then(item => item.json()).then(base => console.log(base.results));

                
//         } catch (error) {
//                 console.log('Error', error.message);
//         } 
// }

// console.log(getPokemons());

///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\





///////////////////////////2\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const baseUrl = 'https://pokeapi.co/api/v2/';

// const getPokemonsInfo = async(name) => {
//         try {
//                 const request = await fetch(`${baseUrl}pokemon/${name}`).then(item => item.json()).then(base => console.log(base));
//         } catch (error) {

//                 console.log(`Покемон, по имени ${name} не найден `);
//         } 
// }

// console.log(getPokemonsInfo('charmeleon'));

///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\






///////////////////////////3\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const baseUrl = 'https://pokeapi.co/api/v2/pokemon';


// const getPokiUrl = async() => {
//         try{
//                 const request = await fetch(baseUrl).then(item => item.json()).then(base => base.results)

//                 const findUrl = request.map(({url}) => {
//                         fetch(url).then(item => item.json()).then(base => console.log(base))
//                 })

//                 console.log(findUrl);
//         }
//         catch {

//         }
// }
// console.log(getPokiUrl());

///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\




