window.onload = function () {
    let cnv = document.getElementById('myCanvas');
    cnv.width = 800;
    cnv.height = 600;

    let radios = document.getElementsByTagName('input');
    for (let radio in radios) {
        radios[radio].onclick = function () {
            let ctx = cnv.getContext('2d');
            cnv.onmousedown = function (e) {

                let dot = new Dot(e, ctx, radio);
                dot.draw();

                let x = e.offsetX;
                let y = e.offsetY;
                cnv.onmouseup = function (e2) {
                    let line = new Line(x, y, e2, ctx, radio);
                    line.draw();
                    let rect = new Rectangle(x, y, e2, ctx, radio);
                    rect.draw();
                }

                let circle = new Circle(e, ctx, radio);
                circle.draw();

                let ellipse = new Ellipse(e, ctx, radio);
                ellipse.draw();
            }
        }
    }
}

class Dot {
    constructor(e, ctx, radio) {
        this.x = e.offsetX;
        this.y = e.offsetY;
        this.ctx = ctx;
        this.radio = radio;
    }

    draw() {
        if (this.radio == 0) {
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
            this.ctx.fill();
        }
    }
}

class Line {
    constructor(x, y, e2, ctx, radio) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.x2 = e2.offsetX;
        this.y2 = e2.offsetY;
        this.radio = radio;
    }

    draw() {
        if (this.radio == 1) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(this.x2, this.y2);
            this.ctx.stroke();
        }
    }
}

class Circle {
    constructor(e, ctx, radio) {
        this.x = e.offsetX;
        this.y = e.offsetY;
        this.ctx = ctx;
        this.radio = radio;
    }

    draw() {
        if (this.radio == 2) {
            this.r1 = prompt('Введите радиус окружности', 10);

            this.ctx.beginPath();
            this.ctx.ellipse(this.x, this.y, this.r1, this.r1, Math.PI / 4, 0, 2 * Math.PI);
            this.ctx.stroke();
        }
    }
}

class Ellipse {
    constructor(e, ctx, radio) {
        this.x = e.offsetX;
        this.y = e.offsetY;
        this.ctx = ctx;
        this.radio = radio;
    }

    draw() {
        if (this.radio == 3) {
            this.r1 = prompt('Введите радиус эллипса', 10);
            this.r2 = prompt('Введите второй радиус эллипса', 20);

            this.ctx.beginPath();
            this.ctx.ellipse(this.x, this.y, this.r1, this.r2, Math.PI / 4, 0, 2 * Math.PI);
            this.ctx.stroke();
        }
    }
}

class Rectangle {
    constructor(x, y, e2, ctx, radio) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.x2 = e2.offsetX;
        this.y2 = e2.offsetY;
        this.radio = radio;
    }

    draw() {
        if (this.radio == 4) {
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(this.x, this.y, this.x2 - this.x, this.y2 - this.y)
        }
    }
}