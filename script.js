

function gameboard (){
    let boardArray = [];

    //populate gameBoard
    for(let i = 0; i < 3; i++){
        let row = [];

        for(let j = 0; j < 3; j++){
            row.push(0);
        }
        boardArray.push(row);
    }

    const printGameBoard = () => {
        //print board to console
        console.log("Printing Board");
        for(let i = 0; i < boardArray.length; i++){
           
            console.log(boardArray[i]);
            
        }
    }

    const checkWin = () => {
        //check rows
        for(let i = 0; i < boardArray.length; i++){
            let sum = 0;
           for(let j = 0; j < boardArray[i].length; j++){
                sum = sum + boardArray[i][j];
           }

           if(sum == 3 || sum == -3){
                //we have a winner
                console.log("ROW WINNER");
           }
        }

        //check columns
        for(let i = 0; i < boardArray.length; i++){
            let sum = 0;
           for(let j = 0; j < boardArray[i].length; j++){
                sum = sum + boardArray[j][i];
           }

           if(sum == 3 || sum == -3){
                //we have a winner
                console.log("COLUMN WINNER");
           }
        }





    }

    const makeMove = (moveInt) => {
        moveInt = moveInt - 1;


        if (moveInt <= 2){
            boardArray[0][moveInt] = 1;
        }else if(moveInt <= 5){
            boardArray[1][moveInt - 3] = 1;
        }else if(moveInt <= 8){
            boardArray[2][moveInt - 6] = 1;
        }


    }

    const getGameboard = () => boardArray;

    


    return {boardArray,printGameBoard, getGameboard, checkWin, makeMove};

}


function Game(){
    gameBoard = gameboard();

    const getGameboardObj = () => gameBoard;
    gameBoard.printGameBoard();
    gameBoard.makeMove(3);
    gameBoard.printGameBoard();
    gameBoard.makeMove(4);
    gameBoard.printGameBoard();
    gameBoard.makeMove(7);
    gameBoard.printGameBoard();
    gameBoard.makeMove(9);
    gameBoard.printGameBoard();
    gameBoard.makeMove(1);
    gameBoard.printGameBoard();
    gameBoard.checkWin();



    

    









    return {getGameboardObj}

}




myGame = Game();
handleDisplay(myGame.getGameboardObj());

function CreatePlayer(name){
    return {name}

}

player = CreatePlayer("Player 1");



function handleDisplay(gameBoard){
    const boardArray = gameBoard.getGameboard()
    const gameArea = document.getElementsByClassName("gameArea")[0];
    const board = document.createElement("div");
    board.setAttribute("class", "board");


    //create visual board
    for(let i = 0; i < boardArray.length; i++){
        for(let j = 0; j < boardArray[i].length; j++){
            const boardSquare = document.createElement("div");
            boardSquare.setAttribute("class", "board-square");
            const pieceIndicator = document.createElement("p");
            pieceIndicator.textContent = "X";
            boardSquare.appendChild(pieceIndicator);
            
            board.appendChild(boardSquare);
            console.log("square appended!");
        
        }
    }
    gameArea.appendChild(board);




}