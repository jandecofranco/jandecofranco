// this.away = "Pretopolis";

// function datTest(){
//     console.log(this.away);
// }

// datTest.call(this);

function datTest(){
    console.log(this.away);
}

const dev = {
    away: "Isabela"    
}

datTest.call(dev);
