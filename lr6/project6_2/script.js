class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    drctn(to_obj) {
        return 'Расстояние между центрами: ' + 
            ((to_obj.x - this.x)**2 + (to_obj.y - this.y)**2)**0.5;
    }

    get params() {
        return 'Точка\n' +
            'Координаты: (' + this.x + ', ' + this.y + ')';
    }
}

class Line {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        
        this.x = (x1 + x2) / 2;
        this.y = (y1 + y2) / 2;
    }

    drctn(to_obj) {
        return 'Расстояние между центрами: ' + 
            ((to_obj.x - this.x)**2 + (to_obj.y - this.y)**2)**0.5;
    }

    get params() {
        return 'Прямая\n' +
            'Центр: (' + this.x + ', ' + this.y + ')\n' + 
            'Точка A: (' + this.x1 + ', ' + this.y1 + ')\n' + 
            'Точка B: (' + this.x2 + ', ' + this.y2 + ')';
    }
}

class Circle extends Dot {
    constructor(x, y, r1) {
        super(x, y);

        this.r1 = r1;
    }

    drctn(to_obj) {
        return 'Расстояние между центрами: ' + 
            ((to_obj.x - this.x)**2 + (to_obj.y - this.y)**2)**0.5;
    }

    drctn(to_obj) {
        return 'Расстояние между центрами: ' + 
            ((to_obj.x - this.x)**2 + (to_obj.y - this.y)**2)**0.5;
    }

    get params() {
        return 'Окружность\n' +
            'Центр: (' + this.x + ', ' + this.y + ')\n' + 
            'Радиус: ' + this.r1;
    }

}

class Ellipse extends Circle {
    constructor(x, y, r1, r2 = '') {
        super(x, y, r1);

        this.r2 = r2;
    }

    drctn(to_obj) {
        return 'Расстояние между центрами: ' + 
            ((to_obj.x - this.x)**2 + (to_obj.y - this.y)**2)**0.5;
    }

    get params() {
        return 'Эллипс\n' +
            'Центр: (' + this.x + ', ' + this.y + ')\n' + 
            'Радиус по вертикали: ' + this.r1 + '\n' +
            'Радиус по горизонтали: ' + this.r2;
    }
}

class Rectangle {
    constructor(x13, y12, x24, y34) {
        this.x13 = x13;
        this.y12 = y12;
        this.x24 = x24;
        this.y34 = y34;

        this.x = (x13 + x24) / 2;
        this.y = (y12 + y34) / 2;
    }

    drctn(to_obj) {
        return 'Расстояние между центрами: ' + 
            ((to_obj.x - this.x)**2 + (to_obj.y - this.y)**2)**0.5;
    }

    get params() {
        return 'Прямоугольник\n' +
            'Центр: (' + this.x + ', ' + this.y + ')\n' + 
            'Точка A: (' + this.x13 + ', ' + this.y12 + ')\n' + 
            'Точка B: (' + this.x24 + ', ' + this.y12 + ')\n' + 
            'Точка C: (' + this.x13 + ', ' + this.y34 + ')\n' + 
            'Точка D: (' + this.x24 + ', ' + this.y34 + ')\n';
    }
}

var tchk = new Dot(1, 2);
var ln = new Line(1, 1, 3, 3);
var crcl = new Circle(2, 2, 5);
var llps = new Ellipse(1, 1, 2, 4);
var rctngl = new Rectangle(1, 1, 2, 2);

console.log(tchk.params);
console.log(ln.params);
console.log(crcl.params);
console.log(llps.params);
console.log(rctngl.params);

console.log(tchk.drctn(ln));
console.log(ln.drctn(crcl));
console.log(crcl.drctn(llps));
console.log(llps.drctn(rctngl));
console.log(rctngl.drctn(tchk));