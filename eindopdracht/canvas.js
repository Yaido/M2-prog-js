window.addEventListener("load", () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //achtergrond
    ctx.fillStyle = "#B3D4E8"
    ctx.fillRect(0, 0, 10000, 10000)
    //bomen
    ctx.fillStyle = "#8A4C19"
    ctx.fillRect(600, 470, 50, 230);
    ctx.fillRect(1300, 500, 70, 200);
    ctx.fillStyle = "green"
    ctx.fillRect(565, 400, 125, 100);
    ctx.fillRect(1270, 400, 125, 100);
    //huizen
    ctx.fillStyle = "#4A4846"
    ctx.fillRect(700, 600, 100, 100);
    ctx.fillRect(810, 600, 100, 100);
    ctx.fillRect(920, 600, 100, 100);
    ctx.fillRect(1030, 600, 100, 100);
    ctx.fillRect(1140, 600, 100, 100);
    //deuren
    ctx.fillStyle = "#CF1124"
    ctx.fillRect(760, 665, 27, 35);
    ctx.fillRect(870, 665, 27, 35);
    ctx.fillRect(980, 665, 27, 35);
    ctx.fillRect(1090, 665, 27, 35);
    ctx.fillRect(1200, 665, 27, 35);
    //ramen
    ctx.fillStyle = "white"
    ctx.fillRect(710, 660, 40, 25);
    ctx.fillRect(820, 660, 40, 25);
    ctx.fillRect(930, 660, 40, 25);
    ctx.fillRect(1040, 660, 40, 25);
    ctx.fillRect(1150, 660, 40, 25);
    ctx.fillStyle = "#E6D9B5"
    ctx.fillRect(710, 615, 15, 17);
    ctx.fillRect(735, 615, 15, 17);
    ctx.fillRect(820, 615, 15, 17);
    ctx.fillRect(845, 615, 15, 17);
    ctx.fillRect(930, 615, 15, 17);
    ctx.fillRect(955, 615, 15, 17);
    ctx.fillRect(1040, 615, 15, 17);
    ctx.fillRect(1065, 615, 15, 17);
    ctx.fillRect(1150, 615, 15, 17);
    ctx.fillRect(1175, 615, 15, 17);  
    //grond
    ctx.fillStyle = "lightgreen "
    ctx.fillRect(0, 710, 1920, 400);
    //weg
    ctx.fillStyle = "white"
    ctx.fillRect(0, 760, 1920, 120);
    ctx.fillStyle = "black"
    ctx.fillRect(10, 813, 80, 10);
    ctx.fillRect(120, 813, 80, 10);
    ctx.fillRect(230, 813, 80, 10);
    ctx.fillRect(340, 813, 80, 10);
    ctx.fillRect(450, 813, 80, 10);
    ctx.fillRect(560, 813, 80, 10);
    ctx.fillRect(670, 813, 80, 10);
    ctx.fillRect(780, 813, 80, 10);
    ctx.fillRect(890, 813, 80, 10);
    ctx.fillRect(1000, 813, 80, 10);
    ctx.fillRect(1110, 813, 80, 10);
    ctx.fillRect(1220, 813, 80, 10);
    ctx.fillRect(1330, 813, 80, 10);
    ctx.fillRect(1440, 813, 80, 10);
    ctx.fillRect(1550, 813, 80, 10);
    ctx.fillRect(1660, 813, 80, 10);
    ctx.fillRect(1770, 813, 80, 10);
});