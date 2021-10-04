sunflowerimage="";

function draw()
{
    image(sunflowerimage, 0, 0, 340, 340);
}

function preload()
{
    sunflowerimage=loadImage("Sunflowers.jfif");
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