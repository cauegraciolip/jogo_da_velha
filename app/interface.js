document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.addEventListener('click', clickAction)
    });

})

function clickAction (event) {

    let square = event.target
    let postion = square.id

    movimento(postion)
    attSquares()

}

function attSquares() {

    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        let postion = square.id;
        let simbolo = board[postion]

        if (simbolo != "") {
            square.innerHTML = `<div class='${simbolo}'></div>`
        }
    });

}