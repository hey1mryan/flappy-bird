let birdSprite;
let topPipeImage;
let bottomPipeImage;
let backgroundImage;
let birdXPos = 40; 
let birdYPos = 150;

// #################################################################################################################################


function preload() {
    birdSprite = loadImage("https://files.slack.com/files-pri/T076QFXMZT5-F07D4NNN4QM/image.png");
    backgroundImage = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/089918d8-99ff-45de-a084-3fe85d0e3fcc/dg34rsu-29a3d144-dc3f-473e-a949-f73a4ba1ef7c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4OTkxOGQ4LTk5ZmYtNDVkZS1hMDg0LTNmZTg1ZDBlM2ZjY1wvZGczNHJzdS0yOWEzZDE0NC1kYzNmLTQ3M2UtYTk0OS1mNzNhNGJhMWVmN2MucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zvNGmLdKoPJQgA8oJpbKhBRg-eCdzTc1j_Nceg1adY4");
}



function setup() {
    createCanvas(500, 500);
    noStroke();

    rectMode(CENTER);
}



function draw() {
    background(backgroundImage);
    
}