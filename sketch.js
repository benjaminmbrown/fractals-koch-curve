var fractal;

function setup() {

    createCanvas(1200, 900);
    setFrameRate(1);
 	fractal = new KochFractal();

}

function draw() {
    background(255);
    fractal.render();
    fractal.next();
    if(fractal.getCount()>8){
    	fractal.restart();
    }
}

