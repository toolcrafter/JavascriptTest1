// global variables
var app;

// called once when the application starts
function applicationStart() {

    //Create a Pixi Application
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    width = 640;
    height = 480;

    app = new PIXI.Application({
        forceCanvas: true,
        width: width,
        height: height
    });

    //Add the canvas that Pixi automatically created for you to the HTML document
    document.body.appendChild(app.view);

    PIXI.loader
        .add("images/player.png")
        .load(loadingFinished);
}

// called when all textures have been loaded
function loadingFinished() {
    let sprite = new PIXI.Sprite(
        PIXI.loader.resources["images/player.png"].texture
    );

    app.stage.addChild(sprite);
}