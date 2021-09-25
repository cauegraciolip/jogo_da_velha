let board = ['', '', '', '', '', '', '', '', '']
let jogador = 0
let simbolo = ['x', 'o']

function movimento(position) {

    if (board[position] == "") {
        board[position] = simbolo[jogador]

        if (jogador == 0) {
            jogador = 1
        } else {
            jogador = 0
         }
    }
    

}