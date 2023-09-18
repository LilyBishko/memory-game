animatedText=function(el){
    el=document.querySelector(el);
    function efect(el,text,index){
      if(index>=text.length)index=0;
      el.innerHTML=text.substring(0,index-1)+'<span style="color:#bfbfbf">'+text.substring(index-1,index)+'</span><span style="color:#bfbfbf;">'+text.substring(index,index+1)+'</span><span style="color:9c9c9c;">'+text.substring(index+1,index+2)+'</span>'+text.substring(index+2);
      setTimeout(efect,75,el,text,index+1);
    }
    efect(el,el.innerText,0);
    }
    
animatedText('#test3');
  



