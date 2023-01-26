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
    ctx.fillRect(300, 470, 50, 230);
    ctx.fillRect(1000, 500, 70, 200);
    ctx.fillStyle = "green"
    ctx.fillRect(265, 400, 125, 100);
    ctx.fillRect(970, 400, 125, 100);
    //huizen
    ctx.fillStyle = "#4A4846"
    ctx.fillRect(400, 600, 100, 100);
    ctx.fillRect(510, 600, 100, 100);
    ctx.fillRect(620, 600, 100, 100);
    ctx.fillRect(730, 600, 100, 100);
    ctx.fillRect(840, 600, 100, 100);
    //deuren
    ctx.fillStyle = "#CF1124"
    ctx.fillRect(460, 665, 27, 35);
    ctx.fillRect(570, 665, 27, 35);
    ctx.fillRect(680, 665, 27, 35);
    ctx.fillRect(790, 665, 27, 35);
    ctx.fillRect(900, 665, 27, 35);
    //ramen
    ctx.fillStyle = "white"
    ctx.fillRect(410, 660, 40, 25);
    ctx.fillRect(520, 660, 40, 25);
    ctx.fillRect(630, 660, 40, 25);
    ctx.fillRect(740, 660, 40, 25);
    ctx.fillRect(850, 660, 40, 25);
    ctx.fillStyle = "#E6D9B5"
    ctx.fillRect(410, 615, 15, 17);
    ctx.fillRect(435, 615, 15, 17);
    ctx.fillRect(520, 615, 15, 17);
    ctx.fillRect(545, 615, 15, 17);
    ctx.fillRect(630, 615, 15, 17);
    ctx.fillRect(655, 615, 15, 17);
    ctx.fillRect(740, 615, 15, 17);
    ctx.fillRect(765, 615, 15, 17);
    ctx.fillRect(850, 615, 15, 17);
    ctx.fillRect(875, 615, 15, 17);
});