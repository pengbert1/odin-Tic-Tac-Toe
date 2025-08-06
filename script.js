const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function gameboard (){
    

    //populate gameBoard
    let boardArray = [0,0,0,0,0,0,0,0,0];


    const printGameBoard = () => {
        //print board to console
        console.log("Printing Board");
        for(let i = 0; i < boardArray.length; i++){
           if( i % 3 == 0){
            console.log("|");
           }
            console.log(boardArray[i] + ",");
            
        }
    }

    const makeBotMove = () => {
        //reason and make bot move
        let moveMade = false;
        //random move 
        //num between 1-8

        while(!moveMade){
            moveInt = Math.floor(Math.random() * 7) + 1;
            moveInt = moveInt - 1;
            
            if(boardArray[moveInt] == 0){
                console.log("moveInt is" + moveInt);
                boardArray[moveInt] = -1;
                checkWin();
                return true;
            }
        }






    }






    const checkWin = () => {
        //check rows

        let sum = 0;
        
         //first row
         sum = boardArray[0] + boardArray[1] + boardArray[2];
         if(sum == 3 || sum == -3){
             console.log("row #1 winner");
             return true;
         }

         //second row
         sum = boardArray[3] + boardArray[4] + boardArray[5];
         if(sum == 3 || sum == -3){
             console.log("row #2 winner");
             return true;
         }

         //third row
         sum = boardArray[6] + boardArray[7] + boardArray[8];
         if(sum == 3 || sum == -3){
             console.log("row #3 winner");
             return true;
         }
        

        //check columns

        //first column
        sum = boardArray[0] + boardArray[3] + boardArray[6];
        if(sum == 3 || sum == -3){
            console.log("column #1 winner");
            return true;
        }

         //second column
         sum = boardArray[1] + boardArray[4] + boardArray[7];
         if(sum == 3 || sum == -3){
             console.log("column #2 winner");
             return true;
         }

          //third column
          sum = boardArray[2] + boardArray[5] + boardArray[8];
          if(sum == 3 || sum == -3){
              console.log("column #3 winner");
              return true;
          }


          //check diagonals
          sum = boardArray[2] + boardArray[4] + boardArray[6];
            if(sum == 3 || sum == -3){
                console.log("diagonal winner");
                return true;
            }

            sum = boardArray[0] + boardArray[4] + boardArray[8];
            if(sum == 3 || sum == -3){
                console.log("diagonal winner");
                return true;
            }







      

            //no winner
            return false;


    }

    const makeMove = (moveInt) => {
        if(boardArray[moveInt] == 0){
            boardArray[moveInt] = 1;
            checkWin();
            return true;
        }else{
            return false;
        }


        


    }

    const getGameboard = () => boardArray;

    


    return {boardArray,printGameBoard, getGameboard, checkWin, makeMove, makeBotMove};

}


function Game(){
    gameBoard = gameboard();
    const getGameboardObj = () => gameBoard;
    let isPlayersTurn = true;
    const getisPlayersTurn = () => isPlayersTurn;
    const setisPlayersTurn = (turnIndicator) =>{
        isPlayersTurn = turnIndicator;
    }
    const createBoardDisplay = () => {
        const boardArray = gameBoard.getGameboard()
        const gameArea = document.getElementsByClassName("gameArea")[0];
        const board = document.createElement("div");
        board.setAttribute("class", "board");
    
    
        //create/display visual board

        for(let i = 0; i < boardArray.length; i++){
            
            const boardSquare = document.createElement("button");
            boardSquare.setAttribute("class", "board-square");
            boardSquare.setAttribute("id","id" + i);
            const pieceIndicator = document.createElement("p");
            boardSquare.appendChild(pieceIndicator);
                
            board.appendChild(boardSquare);
            boardSquare.addEventListener("click", async function(){
                if(isPlayersTurn){
                    let squareInt = parseInt(boardSquare.getAttribute("id")[2]);
                    if(gameBoard.makeMove(squareInt)){
                        isPlayersTurn = false;
                        updateBoardDisplay();
                        const turnArea = document.getElementsByClassName("turn-area")[0];
                        turnArea.textContent = "BOT'S TURN";
                        if(gameBoard.checkWin()){
                            //game over. display winner
                            const gameArea = document.getElementsByClassName("gameArea")[0];
                            const turnArea = document.getElementsByClassName("turn-area")[0];
                            turnArea.textContent = "You Win!";
                            gameArea.appendChild(winnerDisplay);
                        }else{

                            await sleep(1500);
                            gameBoard.makeBotMove();
                            console.log("bot move made");
                            updateBoardDisplay();
                            turnArea.textContent = "YOUR TURN";
                            isPlayersTurn = true;
                        

                        }
        
                    }else{
                        return;
                    }
                    updateBoardDisplay();
                }
    
    
    
            });
            console.log("square appended!");
    
    
            
           
        }
        gameArea.appendChild(board);
    
    
    
    
    }

    const updateBoardDisplay = () => {
        const boardArray = gameBoard.getGameboard()
        const gameArea = document.getElementsByClassName("gameArea")[0];
        const board = document.getElementsByClassName("board")[0];
        if(!board){
            return
        }else{
            for(let i = 0; i < boardArray.length; i++){
                const currSquare = document.getElementById(("id"+i));
                if(boardArray[i] == 1){
                    currSquare.firstChild.textContent = "X";
                }else if (boardArray[i] == -1){
                    currSquare.firstChild.textContent = "O";
                    console.log("bot move shown");
                
                }
                



            }
        }


    }
   

    let display = createBoardDisplay();

    
    /*
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

    */
    //gameBoard.checkWin();



    

    



    





    return {getGameboardObj, getisPlayersTurn, setisPlayersTurn}

}




myGame = Game();

console.log("created game");

function CreatePlayer(name){
    return {name}

}

player = CreatePlayer("Player 1");



