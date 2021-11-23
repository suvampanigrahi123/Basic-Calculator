let screen=document.getElementById('Screen');
let screenValue='';
let btns=document.getElementsByTagName('button');
for (let btn of btns) {
    btn.addEventListener('click',(e)=>{
        let buttonText=e.target.innerText;
        
        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='AC'){
            screen.value='';
            screenValue='';
        }
        else if(buttonText=='D'){
           let nowText=screenValue;
           screenValue=nowText.slice(0,nowText.length-1);
           screen.value=screenValue;
        }
        else if(buttonText=='='){
            screenValue=eval(screen.value);
            screen.value=screenValue;
        }else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}