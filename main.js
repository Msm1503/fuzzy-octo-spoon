var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");
var block_image_object = "";

function new_image() {
    fabric.Image.formURL("BirthdayImage.jpg", function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(800);
        block_image_object.scaleToHeight(600);
        block_image_object.set({
            top: 0,
            left: 0
        });
        canvas.add(block_image_object);
    });
}

function playSound() {
    x.play();
}

