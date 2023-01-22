//Iteración #1: Usa includes
//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

products.forEach(product => {
    if(product.includes("Camiseta")){
        console.log(product)
    }
})

//Iteración #2: Condicionales avanzados
//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
alumns.forEach((notes, alumn)=> {
    console.log(notes.T1, notes.T2, notes.T3);
    if(notes.T1 && notes.T2 || notes.T1 && notes.T3 || notes.T2 && notes.T3){
        alumns[alumn].isApproved = true;
    }else{
        alumns[alumn].isApproved = false;
    };
   });
 
console.log(alumns);
 
const numero1 = 1;
const numero2 = 1;
const numero3 = false;
if(numero2 == numero1){
console.log("si");
};

//Iteración #3: Probando For...of
//Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for(countries of placesToTravel) {
    console.log(countries)
}

//Iteración #4: Probando For...in
//Usa un **for...in** para imprimir por consola los datos del alienígena.
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for(element in alien) {
    console.log(alien.element)
}

//Iteración #5: Probando For
//Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un ***console log*** el array.
const placesToTravel2 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

let id = []

for (let index = 0; index < placesToTravel2.length; index++) {
    const place = placesToTravel2[index]
    if(place.id != 11 && place.id != 40) {
        id.push(place)
    }
}
console.log(id)

//Iteración #6: Mixed For...of e includes
//Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo.
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

let id2 = []

for (toy of toys) {
    if (!toy.name.includes("gato")) {
        id2.push(toy)
    }
}

//Iteración #7: For...of avanzado
//Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.
const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for (toy of toys2) {
    if(toy.sellCount > 15) {
        popularToys.push(toy)
    }
}
console.log(popularToys)