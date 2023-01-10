const choice=['Stone','Scissor','Paper']
const score={
    user:0,
    comp:0
}

function whowon(a,b){
    if(a==b)
        return 0
    else if( (a+1)%3==b )
        return 1
    else
        return -1
}

function play(choice){
    //Reset selected left choice
    const left=Array.from(
        document.getElementById('AI-col')
        .children
    )
    left.forEach((child)=>{
        child.classList.remove('selected')
    })
    
    //Find computer choice and select it
    const ai=Math.floor(Math.random()*3)
    left[ai].classList.add('selected')

    //Apply game status
    const status=document.getElementById('status')
    const won=whowon(choice,ai)
    if(won==0)
        status.innerHTML='DRAW!'
    else if (won==1){
        status.innerHTML='WON!'
        score.user+=1
    }
    else{
        status.innerHTML='LOST!'
        score.comp+=1
    }
        

    //Update score

    document.getElementById('score').innerHTML=`${score.user}-${score.comp}`


}

choice.forEach((ele)=>{
    var doc=document.getElementById(ele)
    doc.addEventListener('click',(e)=>{
        const num={
            'Stone':0,
            'Scissor':1,
            'Paper':2
        }
        play(num[e.target.id])
    })
})

