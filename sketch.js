var KochLines = [];

function setup() {

    createCanvas(1200, 900);
    setFrameRate(30);

    var start = createVector(0, 100);
    var end = createVector(width, 100);

    KochLines.push(new KochLine(start, end));

}

function draw() {
    background(255);
    for (var i = 0; i < KochLines.length; i++) {
        KochLines[i].display();
    }
}


function generate() {
    var next = [];

    for (var i = 0; i < KochLines.length; i++) {
        var a = KochLines[i].kochA();
        var b = KochLines[i].kochB();
        var c = KochLines[i].kochC();
        var d = KochLines[i].kochD();
        var e = KochLines[i].kochE();


        next.push(new KochLine(a, b));
        next.push(new KochLine(b, c));
        next.push(new KochLine(c, d));
        next.push(new KochLine(d, e));
    }
    lines = next;
}

function mousePressed() {
    console.log('press');
}
