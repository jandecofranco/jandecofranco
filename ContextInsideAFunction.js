// Context inside a function
// - não pega o this global, mas se não estiver no modo estrito, sim!


this.name = "Away";

function sayMyName(){
    console.log(this.name);    
}

sayMyName();