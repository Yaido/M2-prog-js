class App
{
    functie1()
    {
        console.log("MARIO!!")
    }
    
    functie2()
    {
        let lachen = "BWAHAHA!!!"
        return lachen;
    }

    functie3(antwoord)
    {
        let getal1 = 20
        let getal2 = 30
        antwoord = getal1 + getal2
        return antwoord
    }
}

let app = new App();
app.functie1();
console.log(app.functie2());
console.log(app.functie3());