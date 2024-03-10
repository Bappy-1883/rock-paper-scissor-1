var tie = 0;
var computerWin = 0;
var userWin = 0;

function rock()
{
    const userRock = "rock";
    // console.log(userRock);

    const computer = Math.floor(Math.random() * 3 + 1);
    // console.log(computer)


    // const computerRock = 1;
    // const computerPaper = 2;
    // const computerScissor = 3;

    if( computer == 1) //rock
    {
        console.log("Tie, Try again 😉");
        tie++;
        // console.log("Tie = " + tie);
        document.getElementById('display').innerHTML = "Tie, Try again 😉";
        document.getElementById('tie').innerHTML = "Tie = " + tie;
        
    }
    else if(computer == 2) //scissor
    {
        console.log("Congratulations, you won!🥲");
        userWin++;
        // console.log("User won = " + userWin);
        document.getElementById('display').innerHTML = "Congratulations, you won!🥲";
        document.getElementById('userwin').innerHTML = "User won = " + userWin;
        
    }
    else // paper
    {
        console.log("Oops, you lose 😎");
        computerWin++;
        // console.log("Computer won = " + computerWin);
        document.getElementById('display').innerHTML = "Oops, you lose 😎";
        document.getElementById('computerwin').innerHTML = "Computer won = " + computerWin;
        
    }


}

function paper()
{
    const userPaper = "paper";
    // console.log(userPaper);

    const computer = Math.floor(Math.random() * 3 + 1);
    // console.log(computer)


    // const computerRock = 1;
    // const computerPaper = 2;
    // const computerScissor = 3;

    if( computer == 1) //paper
    {
        console.log("Tie, Try again 😉");
        tie++;
        // console.log("Tie = " + tie);
        document.getElementById('display').innerHTML = "Tie, Try again 😉";
        document.getElementById('tie').innerHTML = "Tie = " + tie;
    }
    else if(computer == 2) //rock
    {
        console.log("Congratulations, you won!🥲");
        userWin++;
        // console.log("User won = " + userWin);
        document.getElementById('display').innerHTML = "Congratulations, you won!🥲";
        document.getElementById('userwin').innerHTML = "User won = " + userWin;
    }
    else // scissor
    {
        console.log("Oops, you lose 😎");
        computerWin++;
        // console.log("Computer won = " + computerWin);
        document.getElementById('display').innerHTML = "Oops, you lose 😎";
        document.getElementById('computerwin').innerHTML = "Computer won = " + computerWin;
    }
}

function scissor()
{
    const userScissor = "scissor";
    // console.log(userScissor);

    const computer = Math.floor(Math.random() * 3 + 1);
    // console.log(computer)


    // const computerRock = 1;
    // const computerPaper = 2;
    // const computerScissor = 3;


    if( computer == 1) //scissor
    {
        console.log("Tie, Try again 😉");
        tie++;
        // console.log("Tie = " + tie);
        document.getElementById('display').innerHTML = "Tie, Try again 😉";
        document.getElementById('tie').innerHTML = "Tie = " + tie;
        
    }
    else if(computer == 2) //paper
    {
        console.log("Congratulations, you won!🥲");
        userWin++;
        // console.log("User won = " + userWin);
        document.getElementById('display').innerHTML = "Congratulations, you won!🥲";
        document.getElementById('userwin').innerHTML = "User won = " + userWin;
    }
    else // rock
    {
        console.log("Oops, you lose 😎");
        computerWin++;
        // console.log("Computer won = " + computerWin);
        document.getElementById('display').innerHTML = "Oops, you lose 😎";
        document.getElementById('computerwin').innerHTML = "Computer won = " + computerWin;


    }

}

// const computer = Math.floor(Math.random() * 3 + 1);
// console.log(computer)


// const computerRock = 1;
// const computerPaper = 2;
// const computerScissor = 3;







