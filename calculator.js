var display=document.getElementById('input');
var buttons=document.querySelectorAll('button');

let disp_value=""
let screenvalue=""
for(item of buttons){
   item.addEventListener('click',function(event){
      disp_value=event.target.innerHTML
      console.log(disp_value)
      if(disp_value=="c"){
         screenvalue=""
         display.value=screenvalue
      }
      else if(disp_value=="="){
         display.value=eval(screenvalue)
      }
      else{
         screenvalue+=disp_value
         display.value=(screenvalue)
      }
   })
}

 


