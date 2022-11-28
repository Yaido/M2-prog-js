class App
{
    runApplication()
    {
        console.log("Hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);
        this.tekenhuis(g);
    }

    tekenhuis(g)
    {
        console.log("Hello world!");
        let canvas = document.getElementById("canvasId");
        g.fillRect(0,0,10,10);
    }
}

let app = new App();
app.runApplication();   