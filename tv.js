tvimage="";

function draw()
{
    image(tvimage, 0, 0, 340, 340);
}

function preload()
{
   tvimage=loadImage("Tv.jfif");
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