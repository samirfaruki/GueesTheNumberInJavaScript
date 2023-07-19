let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let displayMessage=(message)=>{
    document.querySelector('.message').textContent=message


}
let displaynumber=(number)=>{
    document.querySelector('.number').textContent=number


}
let displayscore=(score)=>{
    document.querySelector('.score').textContent=score


}
displayscore(score);
document.querySelector('.highscore').textContent = highscore;
displaynumber( "?");

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (guess === secretNumber) {
        displayMessage('Correct') ;
        displaynumber(secretNumber) ;
        document.querySelector('body').style.backgroundColor = "green";
    
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else   {
        guess > secretNumber ? displayMessage("too high"):displayMessage("too low")
        score -= 1;
        
    
        displayscore(score);
    } 
});

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = "black";
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayscore(score);
    displaynumber("?") ;
    document.querySelector('.guess').value = '';
    displayMessage( 'Start guessing...');
   
});
