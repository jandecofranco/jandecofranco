// function.apply(this, [arg1, arg2])
// Bind = ligar. Ele retorna a função chamada porém, ligada ou seja uma "bound" function.


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

// const boundSayMyName = sayMyName.bind(this);
// boundSayMyName(18);
 

// Obs: Bound = função ligada a um contexto.

// exemplo 2


this.name = "Camila";
this.age = 25;

function sayMyName(age){
    this.age = age;
    console.log(this.name, this.age);    
};

const dev = {
    name: "Isabela",
    age: 35,
    sayMyAge: function()    {
        console.log(this.name, this.age);
        
    }
};

const age = dev.sayMyAge.bind(this);
age();

// Obs: O bind "liga" a função retirada de um outro contexto.