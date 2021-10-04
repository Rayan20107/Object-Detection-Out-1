fanimage="";

function draw()
{
    image(fanimage, 0, 0, 340, 340);
}

function preload()
{
    fanimage=loadImage("Fan.jfif");
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