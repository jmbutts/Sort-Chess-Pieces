let chessPieces = ["♟︎", "♘", "♟︎", "♘", "♟︎", "♝", "♟︎", "♝", "♜", "♟︎", "♟︎", "♜", "♕", "♔", "♟︎", "♟︎"]
let pawnShelf = document.getElementById("pawn-shelf")
let minorPiecesShelf = document.getElementById("minorpieces-shelf")
let rookShelf = document.getElementById("rook-shelf")
let royalShelf = document.getElementById("royal-shelf")

function sortPieces() {
  for(let i = 0; i < chessPieces.length; i++){

    if(chessPieces[i] === "♟︎"){
    pawnShelf.innerHTML = pawnShelf.innerHTML + chessPieces[i]
    }

    else if(chessPieces[i] === "♘" || chessPieces[i] === "♝"){
    minorPiecesShelf.innerHTML = minorPiecesShelf.innerHTML +       
    chessPieces[i]
    }

    else if(chessPieces[i] === "♜"){
    rookShelf.innerHTML = rookShelf.innerHTML + chessPieces[i]
    }

    else { 
    royalShelf.innerHTML = royalShelf.innerHTML + chessPieces[i]
    }
  } 
}

sortPieces()