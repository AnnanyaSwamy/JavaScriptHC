let prevGuessArr=[];
let attempts=10;
const rand=Math.floor(Math.random()*100+1);
console.log(rand);


document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    const input=parseInt(document.querySelector('#number-guessed').value);
    if(input===rand){
        document.querySelector('.results').innerText=`Congratulations! ${rand} is the correct number.`
        document.querySelector('.reload').setAttribute('style', 'visibility: visible');
        document.querySelector('.reload').addEventListener('click', function(){
            location.reload();
        });
    }
    else{
        attempts-=1;
        prevGuessArr.push(input);
        const prevGuessStr=displayPrev(prevGuessArr);
        document.querySelector('.previous-guesses').innerText=prevGuessStr;
        document.querySelector('.remaining-guesses').innerText=attempts;
        if(input<rand){
            document.querySelector('.advice').innerText="The number is too low";
        }
        else{
            document.querySelector('.advice').innerText="The number is too high";
        }
    }
    if(attempts===0){
        document.querySelector('.results').innerText=`Oops! You lost, Start over.`
        document.querySelector('.reload').setAttribute('style', 'visibility: visible');
        document.querySelector('.reload').addEventListener('click', function(){
            location.reload();
        });
    }
    document.querySelector('form').reset();
})


function displayPrev(arr){
    let str="";
    for (let i of arr){
        str+=` ${i}`;
    }
    return str;
}