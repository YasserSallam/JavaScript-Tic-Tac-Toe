window.addEventListener('load', strat());
function strat() {
    //get document elements
    var helpbtn = document.querySelector("#help");
    var exitbtn = document.querySelector("#exit");
    var playAgainbtn = document.querySelector("#playAgain");
    var player = document.querySelector("#You");
    var computer = document.querySelector("#computer");
    var ties = document.querySelector("#ties");
    var r1c1 = document.getElementById("0");
    var r1c2 = document.getElementById("1");
    var r1c3 = document.getElementById("2");
    var r2c1 = document.getElementById("3");
    var r2c2 = document.getElementById("4");
    var r2c3 = document.getElementById("5");
    var r3c1 = document.getElementById("6");
    var r3c2 = document.getElementById("7");
    var r3c3 = document.getElementById("8");
    var GameMode=document.querySelector("input[name='GameMode']:checked").value;
    var plyingFlag = 0;                   //flag define who play now computer or player
    var GameEnded = false;
    var numberofmovies = 0;
    player.value = 0;
    computer.value = 0;
    ties.value = 0;
    // help Button
    helpbtn.addEventListener('click', function () {
        alert("welcome to Tic Tac Toy Game You play as X's and Computer as O's. Select the Square You want to put Your X into you can not press the square that already pressed by you or computer. the first player get 3 squars in a row , coulmn or cross wins.. good luck !!");
    }
    );
    //  Exit Button
    exitbtn.addEventListener('click', function () {
        var close = confirm("Are You Sure You want to End Game and close Window ??!")
        if (close == true) {
            window.close();
        }
    });
    //  play Again button
    playAgainbtn.addEventListener('click', function () {
        r1c1.className = "unused"
        r1c2.className = "unused"
        r1c3.className = "unused"
        r2c1.className = "unused"
        r2c2.className = "unused"
        r2c3.className = "unused"
        r3c1.className = "unused"
        r3c2.className = "unused"
        r3c3.className = "unused"
        //reset Images
        r1c1.src = "blank.jpg";
        r1c2.src = "blank.jpg";
        r1c3.src = "blank.jpg";
        r2c1.src = "blank.jpg";
        r2c2.src = "blank.jpg";
        r2c3.src = "blank.jpg";
        r3c1.src = "blank.jpg";
        r3c2.src = "blank.jpg";
        r3c3.src = "blank.jpg";

        GameEnded = false;
        numberofmovies = 0;
        plyingFlag = 0;
        sharedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    });


    var Gamer = function () {
        var Symbol;
    };
    var Human = new Gamer();
    Human.name = "X";

    var Computer = new Gamer();
    Computer.name = "O";

    var sharedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    var exp = function (e) {
        if (this.className == "clicked") {
            e.preventDefault();
            alert("Used before");
        }
        else if (GameEnded == true) {
            e.preventDefault();
            alert("game ended please press play again button")
        }
        else if (numberofmovies == 8) {
            e.preventDefault();
            alert("ties");
            ties.value = +(ties.value) + 1;
            GameEnded = true;
        }
        else {
            e.preventDefault();
            this.className = "clicked";
           // if (plyingFlag == 0) {
                this.src = "x.jpg";
                sharedArray[this.id] = "X";
                numberofmovies += 1;
                if (checkWinner()) {
                    player.value = +(player.value) + 1;
                    alert("Congrats You win :)");
                    GameEnded = true;
                }
            computerTurn(this);               
            }       
    };
    var checkWinner = function () {
        if ((sharedArray[0] == sharedArray[1] && sharedArray[1] == sharedArray[2]) ||    //first row
            (sharedArray[3] == sharedArray[4] && sharedArray[4] == sharedArray[5]) ||    //Second row
            (sharedArray[6] == sharedArray[7] && sharedArray[7] == sharedArray[8]) ||    //third row
            (sharedArray[0] == sharedArray[3] && sharedArray[3] == sharedArray[6]) ||    //first column
            (sharedArray[1] == sharedArray[4] && sharedArray[4] == sharedArray[7]) ||    //second column
            (sharedArray[2] == sharedArray[5] && sharedArray[5] == sharedArray[8]) ||    //third coulmn
            (sharedArray[0] == sharedArray[4] && sharedArray[4] == sharedArray[8]) ||    //cross
            (sharedArray[2] == sharedArray[4] && sharedArray[4] == sharedArray[6]) )         //cross
         {
            return true;
        }
        else {

            return false;
        }
    }
    var computerTurn=function(e){
        if(GameEnded == false){
        var randomnumber=Math.floor( Math.random() * 9 );
while(document.getElementById(randomnumber).className !="unused"){
    randomnumber=Math.floor( Math.random() * 9 );
}
        document.getElementById(randomnumber).src = "o.jpg";
        document.getElementById(randomnumber).className = "clicked";

                sharedArray[randomnumber] = "O";                                
                numberofmovies += 1;
                if (checkWinner()) {
                    computer.value = +(computer.value) + 1;
                    alert("Computer win u loose :(");
                    GameEnded = true;

                } 
            }
               // plyingFlag = 0;
    }
r1c1.addEventListener('click', exp);
r1c2.addEventListener('click', exp);
r1c3.addEventListener('click', exp);
r2c1.addEventListener('click', exp);
r2c2.addEventListener('click', exp);
r2c3.addEventListener('click', exp);
r3c1.addEventListener('click', exp);
r3c2.addEventListener('click', exp);
r3c3.addEventListener('click', exp);

}








