// Arrow function 


// Neste exemplo a primeira arrow está puxando o escopo global pra dentro da função e a segunda arrow function está puxando o escopo da função para dentro dela.
// this.name = "Valeska";

// const age = (age) => {
//     const birthYear = age =>{
//         const year = 2020 - age;
//         console.log(this.name, year);        
//     };

//     birthYear(age);
// }

// age(18);




// Neste exemplo, a última função que está dentro de outras funções, a sua arrow puxará sempre o escopo de fora para ela, no caso o escopo que será puxada é o this mais próximo dele, no caso o this.name "away".
// this.name = "Valeska";

// const age = (age) => {

//     this.name = "Away"; 

//     const birthYear = age =>{
//         const year = 2020 - age;
//         console.log(this.name, year);        
//     };

//     birthYear(age);
// }

// age(18);





this.name = "Valeska";

const age = (age) => {

    this.name = "Away"; 

    const birthYear = age =>{
        const year = 2020 - age;
        console.log(this.name, year);        
    };

    birthYear(age);
}

age(18);


const dev = {
    sayMyName: () => { // Sendo uma função simples, dará undefined, pois a const dev está isolada
        console.log(this.name);    
        this.name = "Enzo"    
    }
}

dev.sayMyName();

console.log(this.name);








