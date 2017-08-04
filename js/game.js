var game = new Phaser.Game(600, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.atlas('seacreatures', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');
    
}

function create() {

    //  This is just a visual debug grid, it's not needed for the actual Group.align to work
    game.add.sprite(0, 0, game.create.grid('grid', 160 * 4, 160 * 4, 75, 75, 'rgb(255,255,255)'));

    var group = game.add.group();

    

    //  Try changing the position constant to see the difference:
    group.align(5, 3, 160, 160, Phaser.CENTER);
    // group.align(5, 3, 160, 160, Phaser.TOP_RIGHT);
    // group.align(5, 3, 160, 160, Phaser.BOTTOM_LEFT);

}
