/*                    Methods    

En este punto, tenemos una clase Dog que crea objetos
 con propiedades name y behavior. Debajo, agregaremos
 métodos getters y un método para dar vida a nuestra 
 clase.
 
 La sintaxis del método de clase y del getter es la misma
 que para los objetos excepto que no se pueden incluir
 comas entre los métodos*/

// class Dog {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 0;
//   }

//   get name() {
//     return this._name;
//   }

//   get behavior() {
//     return this._behavior;
//   }

//   incrementBehavior() {
//     this._behavior++;
//   }
// }

/*En el ejemplo anterior, agregamos métodos getters para
name y behavior. Observe que también antepusimos los
nombres de las propiedades con guiones bajos (_name y
_behavior), lo que indica que no se debe acceder 
directamente a ellas. Debajo de los getters, añadimos
un método llamado .incrementBehavior(). Al llamar a
incrementBehavior() en una instancia Dog, se agrega 1 a
la propiedad _behavior. Entre cada uno de nuestros
métodos no incluimos comas. */

//Ejercicio:
// class Surgeon {
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
// }

// const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
// const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");

/*Ejercicio:

Paso 1:
En el constructor Surgeon, anteponga a las propiedades name
y department un guión bajo (_). 

Paso 2:
Dentro de constructor(), agregue una propiedad llamada
_remainingVacationDays y configúrela igual a 20.

Paso 3:
Debajo de constructor(), crea un getter llamado name
que devuelve el valor guardado en _name.

Paso 4:
Debajo del getter name, crea un getter llamado
department que devuelva el valor guardado en
_department.

Paso 5:
Debajo del getter department, crea un getter llamado
remainingVacationDays que devuelva el valor guardado
en _remainingVacationDays.

Paso 6:
Debajo del getter remainingVacationDays, crea un método
llamado takeVacationDays que acepte un argumento
llamado daysOff.

Dentro del método, resta daysOff del número guardado en
_remainingVacationDays. Establece el resultado en
_remainingVacationDays.

*/

class Surgeon {
  constructor(name, department) {
    // Paso 1: Propiedades privadas con _
    //El guión bajo es una convención en JS que indica que estas
    // propiedades son "privadas" y no deberían ser accedidas directamente desde
    // fuera de la clase. Es una buena práctica de encapsulación.
    this._name = name;
    this._department = department;
    //PASO 2: Agregamos una nueva propiedad que
    // representa los días de vacaciones restantes, inicializada en 20 para todos los cirujanos.
    this._remainingVacationDays = 20;
  }

  // Paso 3: Getter para name
  // Los getters permiten acceder a las propiedades de una forma más controlada.
  get name() {
    return this._name;
  }

  // Paso 4: Getter para department
  //Similar al anterior, proporciona acceso controlado a la propiedad _department.
  get department() {
    return this._department;
  }

  // Paso 5: Getter para remainingVacationDays
  //Permite leer los días de vacaciones restantes sin acceder directamente a la propiedad privada.
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  // Paso 6: Método takeVacationDays
  //Este método modifica la propiedad _remainingVacationDays restando los días tomados (daysOff).
  // Es la forma correcta de modificar propiedades privadas desde fuera de la clase.
  takeVacationDays(daysOff) {
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}

const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");

// Ejemplo de uso:
console.log(surgeonRomero.name); // 'Francisco Romero'
console.log(surgeonRomero.remainingVacationDays); // 20
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays); // 17
