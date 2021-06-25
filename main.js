canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 140;
car1_height = 90;

car2_width = 140;
car2_height = 90;

background_image = "racing.jpg";
car1_image = "car1.png";
car1_x = 20;
car1_Y = 20;

car2_image = "car2.png";
car2_x = 20;
car2_Y = 110;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;


    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_Y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_Y, car2_width, car2_height);
}

window.addEventListener("keydown", mykeyDown);

function mykeyDown(e) {
    keypress = e.keyCode;
    if (keypress == '38') {
        up();
    }

    if (keypress == '39') {
        right();
    }

    if (keypress == '40') {
        down();
    }
    if (keypress == '37') {
        left();
    }
    if (keypress == '87') {
        w();
    }

    if (keypress == '65') {
        a();
    }

    if (keypress == '83') {
        s();
    }
    if (keypress == '68') {
        d();
    }
}

function up() {
    if (car1_Y >= 0) {
        car1_Y = car1_Y - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function down() {
    if (car1_Y <= 500) {
        car1_Y = car1_Y + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}



function w() {
    if (car2_Y >= 100) {
        car2_Y = car2_Y - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function s() {
    if (car2_Y <= 500) {
        car2_Y = car2_Y + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function a() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function d() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

