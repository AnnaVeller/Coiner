
window.addEventListener('load', function() {

    var game = new Phaser.Game({
        "title": "Phaser-first",
        "width": 800,
        "height": 450,
        "type": Phaser.AUTO,
        "backgroundColor": "#CCF",
        "parent": "game-container",
        "physics":{default:"arcade", arcade: {debug:true}},
        //"physics":{default:"arcade"},
        "render": {"pixelArt": true},
        "scale": {
            "mode": Phaser.Scale.FIT,
            "autoCenter": Phaser.Scale.CENTER_BOTH
        }
    });
    game.scene.add("Boot", Boot, true);

});

class Boot extends Phaser.Scene {

    preload() {
        this.load.pack("pack", "assets/pack.json");
    }

    create() {
        this.scene.start("Scene1");
    }

}
