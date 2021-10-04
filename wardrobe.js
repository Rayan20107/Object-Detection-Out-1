wardrobeimage="";

function draw()
{
    image(wardrobeimage, 0, 0, 340, 340);
}

function preload()
{
   wardrobeimage=loadImage("Wardrobe.jfif");
}

function setup()
{
    canvas=createCanvas(340, 340);
    canvas.center();
}

function back()
{
    window.location="index.html"
}