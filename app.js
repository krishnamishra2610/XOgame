const square = document.querySelectorAll('.square')
var XO = 'X'

square.forEach(className => {
    className.addEventListener('click', () => {
        if (className.textContent != 'X' && className.textContent != 'O') {
            className.textContent = XO
            if (XO === 'X') XO = 'O'
            else XO = 'X'
            let timer = setInterval(check, 1000)
        }


    })
})

function check() {

    for (j = 0; j < 3; j++) {
        var x = ""
        for (i = 0; i < 3; i++) {
            x = x + square[i + 3 * j].textContent
        }
        if (x === "XXX") {
            alert('player1 won!!!')
            clearSquares()
        } else if (x === 'OOO') {
            alert('player2 won')
            clearSquares()
        }
    }

    for (j = 0; j < 3; j++) {
        var y = ""
        for (i = 0; i < 3; i++) {
            y = y + square[j + 3 * i].textContent
        }
        if (y === "XXX") {
            alert('player1 won!!!')
            clearSquares()
        } else if (y === 'OOO') {
            alert('player2 won')
            clearSquares()
        }
    }
    var z = ""
    var p = ''
    for (i = 0; i < 3; i++) {
        z = z + square[3 * i + i].textContent
        p = p + square[2 * i + 2].textContent
    }
    if (z === "XXX" || p == "XXX") {
        alert('player1 won!!!')
        clearSquares()
    } else if (z === 'OOO' || p == 'OOO') {
        alert('player2 won')
        clearSquares()
    }
}

function clearSquares() {
    square.forEach(className => {
        className.textContent = ""
    })
}

const resetBoxes = document.querySelector('#resetBoxes')
resetBoxes.addEventListener('click', clearSquares)