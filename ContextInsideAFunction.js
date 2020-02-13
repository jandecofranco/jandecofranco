// Context inside a function
// - não pega o this global, mas se não estiver no modo estrito, sim!


this.name = "Away";

function sayMyName(){
    //O escopo local não vai pegar o escopo global
    console.log(this.name);    
}

sayMyName();
