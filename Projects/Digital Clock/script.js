setInterval(function(){
    const date=new Date();
    const Hours=date.getHours();
    const Minutes=date.getMinutes();
    const Seconds=date.getSeconds();
    document.querySelector('.clock>.hours>h2').innerText=Hours;
    document.querySelector('.clock>.minutes>h2').innerText=Minutes;
    document.querySelector('.clock>.seconds').innerText=Seconds;

    if(Hours>=12){
        document.querySelector('.clock>.am-pm').innerText='PM';
    }
    else{
        document.querySelector('.clock>.am-pm').innerText='AM';
    }
}, 1000)