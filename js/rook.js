function Rook (x,y, color) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.image = "/img/chess_piece_white_rook_T.png";
    this.moves = function(x,y){
        this.x += x;
        this.y += y;
    }
}
 
//var wRook = new Rook (x,1, 'white');
//wRook.moves(userinput,userinput);

