// function.apply(this, [arg1, arg2])
// apply do inglês aplicar, retorna o this (array) do contexto que eu enviar.


// exemplo 1

// this.name = "Camila";
// this.age = 25;

// function sayMyName(age){
//     this.age = age;
//     console.log(this.name, this.age);    
// }

// const dev = {
//     name: "Isabela"    
// }

// sayMyName.apply(this, [18]);

// console.log(this.age);


// exemplo 2

// this.name = "Camila";
// this.age = 25;

// function sayMyName(){
//     this.age = arguments[0];
//     this.likes = arguments[1];
//     this.clothes = arguments[2];
//     console.log(this.name, this.age, this.likes, this.clothes);    
// }

// const dev = {
//     name: "Isabela"    
// }

// sayMyName.apply(this, [18, "banana", "vestido"]);



// exemplo 3

this.name = "Camila";
this.age = 25;

function sayMyName(age){
    this.age = age;
    console.log(this.name, this.age);    
}

const dev = {
    name: "Isabela"    
}

function multiply(){
    const args = Array.from(arguments);
    return args.reduce((acc, item) => {
        return acc * item;
    }, 1)
}

const total = multiply.apply(this, [2, 2, 3, 2]);
console.log(total);

