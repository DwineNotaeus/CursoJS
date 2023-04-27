class SingletonPatron {
  static instancia; // undefined

  nombre = '';

  constructor(nombre = '') {
    const a = undefined;
    console.log(a);
    console.log(!a);
    console.log(!!a);


    // Habilitar para ver aplicación del Singleton
    //* if (!!SingletonPatron.instancia) {
    //*   return SingletonPatron.instancia;
    //* }

    SingletonPatron.instancia = this;
    this.nombre = nombre;

    // return this;
  }
}

const instacia1 = new SingletonPatron('Ironman');
const instacia2 = new SingletonPatron('Spiderman');
const instacia3 = new SingletonPatron('Black Panther');


// apuntan a un solo espacio en memoria 
console.log(`Nombre en la instancia 1: ${instacia1.nombre}`);
console.log(`Nombre en la instancia 2: ${instacia2.nombre}`);
console.log(`Nombre en la instancia 3: ${instacia3.nombre}`);
