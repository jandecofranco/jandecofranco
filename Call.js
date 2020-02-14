// function.call(this, arg1, arg2)
// call do inglês chamar, retorna o this do contexto que eu enviar.


this.name = "Camila";

function sayMyName(age){
    this.age = age;
    console.log(this.name, this.age);    
}

const dev = {
    name: "Isabela"    
}

sayMyName.call(this, 18);
sayMyName.call(dev, 19);


console.log(this.age);
console.log(dev.age);

