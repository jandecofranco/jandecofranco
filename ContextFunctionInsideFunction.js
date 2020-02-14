// Context function inside a function



// neste contesto não pega o this global (name)
// this.name = "Valeska";

// function age(age){
//     function birthYear(age){
//         const year = 2020 - age;
//         console.log(this.name, year);        
//     }

//     birthYear(age);
// }

// age(25);



this.name = "Valeska";

function age(age){ // function responsável por transformar o escopo em local 
    this.name = "Away"

    function birthYear(age){ // está function "pegou" o escopo local anterior, no caso o nome "Away" irá ser apresentado.
        //this.name = "qualquer nome" = será o contesto local e o escopo foi alterado.

        const year = 2020 - age;
        console.log(this.name, year);        
    }

    birthYear(age);
}

age(25);