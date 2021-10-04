teddyimage="";

function draw()
{
    image(teddyimage, 0, 0, 340, 340);
}

function preload()
{
teddyimage=loadImage("teddybear.jpg");
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