const colorArr=document.querySelectorAll('.button');

colorArr.forEach((elem)=>{
    elem.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        console.log(e.target.id);
        if(e.target.id==='blue'){
            document.querySelector('body').style.backgroundColor='cornflowerblue';
        }
        else if(e.target.id==='lime'){
            document.querySelector('body').style.backgroundColor='limegreen';
        }
        else if(e.target.id==='pink'){
            document.querySelector('body').style.backgroundColor='pink';
        }
        else if(e.target.id==='bisque'){
            document.querySelector('body').style.backgroundColor='bisque';
        }
    })
})

