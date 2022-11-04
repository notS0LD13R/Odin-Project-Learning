
console.log("Hello")

const html=document.getElementsByTagName('html')[0];
console.log(html)





document.addEventListener('wheel',(e)=>{
    console.log(window.scrollX,window.scrollY)
    if (Math.ceil(window.scrollY)>=window.innerHeight){
        window.scrollBy(e.deltaY,0);
        if(window.scrollX!=0)
            html.style.overflowY="hidden";
        else
            html.style.overflowY="scroll";
        
    }
});
