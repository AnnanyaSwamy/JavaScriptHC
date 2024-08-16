document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    // console.log(typeof(height));
    // console.log(typeof(weight));

    if(height<0 || height==='' || isNaN(height)){
        document.querySelector('.your-bmi').innerText=`Enter a valid height`;
    }
    else if(weight<0 || weight==='' || isNaN(weight)){
        document.querySelector('.your-bmi').innerText=`Enter a valid weight`;
    }
    else{
        const result=weight/((height*0.01)**2);
        document.querySelector('.your-bmi').innerText=result.toFixed(2);
        if(result<18.6){
            document.querySelector('.your-range').innerText=`You're Underweight`;
        }
        else if(result>=18.6 && result<=24.9){
            document.querySelector('.your-range').innerText=`You're within the normal range`;
        }
        else{
            document.querySelector('.your-range').innerText=`You're Overweight`;
        }
    }
    document.querySelector('.results').setAttribute('style', 'visibility: visible');
})