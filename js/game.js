var game = new Phaser.Game(600, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('pawn', '/img/chess_piece_white_pawn_T.png');
    game.load.image('rook', '/img/chess_piece_white_rook_T.png');
<<<<<<< HEAD
    game.load.image('knight', '/img/chess_piece_white_knight_T.png');
    
=======
    game.load.image('bishop', '/img/chess_piece_white_bishop_T.png');
    game.load.image('queen', '/img/chess_piece_white_queen_T.png');
    game.load.image('king', '/img/chess_piece_white_king_T.png');
    game.load.image('knight', '/img/chess_piece_white_knight_T.png');
>>>>>>> 3953cd8673ed02b68c50d18cfd80e87cbfc0fb3e
}

function create() {

    
    game.add.sprite(0, 0, game.create.grid('grid', 160 * 4, 160 * 4, 75, 75, 'rgb(255,255,255)'));

    var group = game.add.group();

      //  Try changing the position constant to see the difference:
    group.align(5, 3, 160, 160, Phaser.CENTER);
    group.align(5, 3, 160, 160, Phaser.TOP_RIGHT);
    group.align(5, 3, 160, 160, Phaser.BOTTOM_LEFT);

    var pawnX;
    var pawnY;

    //Adding Initial Pawns
    for(var i = 0; i < 8; i++){
        var pawn = game.add.sprite(i* 75, 75, 'pawn');
        pawn.scale.setTo(0.15,0.15);    
    }

    for(var j = 0; j < 8; j++){
        pawn = game.add.sprite(j* 75, 450, 'pawn');
        pawn.scale.setTo(0.15,0.15);
    }

    //Adding Initial Rooks

    for(var z = 0; z < 2; z++){
        var rook = game.add.sprite(z*525, 0, 'rook');
        rook.scale.setTo(0.15,0.15);       
    }

    for(var k = 0; k < 2; k++){
        rook = game.add.sprite(k*525, 525, 'rook');
        rook.scale.setTo(0.15,0.15);
    }

    //Adding Initial Knights
        var knight = game.add.sprite(450, 0, 'knight');
        knight.scale.setTo(0.15,0.15);
        knight = game.add.sprite(75, 0, 'knight');
        knight.scale.setTo(0.15,0.15);
        knight = game.add.sprite(450, 525, 'knight');
        knight.scale.setTo(0.15, 0.15);
        knight = game.add.sprite(75, 525, 'knight');
        knight.scale.setTo(0.15,0.15);
    

}
