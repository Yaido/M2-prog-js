class App
{
    runApplication()
    {
        console.log("Hello World!")
        let appnaam = "MijnApp";
        let versienummer = 23;
        let versiedatum = "21 November";
        let autheur = "Yaido";
        let copyright = "ja";
        let distributeur = "Niemand";
        let darkmode = true;
        console.log(appnaam)
        console.log(versienummer)
        console.log(versiedatum)
        console.log(autheur)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)
    }
}

let app = new App();
app.runApplication();