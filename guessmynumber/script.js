let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
document.querySelector('.number').textContent = "?";

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "green";
    
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else   {
        guess > secretNumber ? document.querySelector('.message').textContent="too high":document.querySelector('.message').textContent="too low"
        score -= 1;
        
    
        document.querySelector('.score').textContent = score;
    } 
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
   
});
