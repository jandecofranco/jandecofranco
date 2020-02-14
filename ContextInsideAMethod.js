// Context inside a method
// - não pega o this global, somente do objeto.

this.name = "João";

const dev = {
    name: "Cleiton",
    sayMyName: function(){
        console.log(this.name);        
    }    
}

dev.sayMyName();