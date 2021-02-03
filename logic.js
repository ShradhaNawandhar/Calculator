let screen=document.getElementById('screen');//Input Text Field
buttons=document.querySelectorAll('button');
let screenValue='';//variable which holds string value where as screen.value is the actual value on screen
for(item of buttons){
    item.addEventListener('click',(e)=>
    {
        buttonText=e.target.innerText;//Text inside the button clicked will be assigned to buttonText
        if(buttonText=='=')
        {
            screen.value=eval(screenValue)
        }
        else if(buttonText=='C')
        {
            screenValue='';
            screen.value=screenValue;
        }
        else if(buttonText=='X')
        {
            screenValue=screen.value.substring(0, screen.value.length - 1);
            screen.value=screenValue;
        }
        else{
            screenValue +=buttonText;
            screen.value=screenValue;
        }
    })
}