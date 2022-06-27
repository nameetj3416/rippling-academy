var table=new Array(3);
for(let i=0;i<3;i++){
    table[i]=new Array(3);
}
var turn=1;
var score=[0,0,0];
var initialBoard=document.querySelector('#board').innerHTML;

// 0->unoccupied cell
// 1->'O' cell
// 2->'X' cell
const init=()=>{
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            table[i][j]=0;
        }
    }
    turn=1;
    document.querySelector('#board').innerHTML=initialBoard;
    document.querySelectorAll('#cell').forEach( item=>{
        item.innerText='';
    })
    document.querySelector('.rightx').innerText=score[1].toString();
    document.querySelector('.righty').innerText=score[2].toString();
    document.querySelector('.o_score').style.removeProperty('border-bottom');
    document.querySelector('.x_score').setAttribute("style", "border-bottom:2px solid #3cb097;");
    document.getElementById('currTurn').innerText='Start game or select player';
    
    
}
init();
const isFull=()=>{
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(table[i][j]===0){
                return false;
            }
        }
    }
    return true;
}


const checkWin=()=>{
    for(let i=0;i<3;i++){
        if(table[i][0]===table[i][1] && table[i][1]===table[i][2]){
            return table[i][0];
        }
    }
    for(let i=0;i<3;i++){
        if(table[0][i]===table[1][i] && table[1][i]===table[2][i]){
            return table[0][i];
        }
    }
    if(table[0][0]===table[1][1] && table[1][1]===table[2][2]){
        return table[0][0];
    }
    if(table[0][2]===table[1][1] && table[1][1]===table[2][0]){
        return table[0][2];
    }
    return 0;
}

const eventAdder=()=>{
    document.querySelectorAll('#cell').forEach(item => {
        let cell=item.title;
        let x=parseInt((parseInt(cell)-1)/3);
        let y=(parseInt(cell)-1)%3;
        item.addEventListener('click', event => {
            let label=item.innerText;
            if(table[x][y]==0){
                table[x][y]=turn;
                item.innerText=(turn===1)?'X':'O';
                turn=3-turn;
                if(turn===1){
                    document.querySelector('.o_score').style.removeProperty('border-bottom');
                    document.querySelector('.x_score').setAttribute("style", "border-bottom:2px solid #3cb097;");
                }
                else if(turn===2){
                    document.querySelector('.x_score').style.removeProperty('border-bottom');
                    document.querySelector('.o_score').setAttribute("style", "border-bottom:2px solid #3cb097;");
                }
                document.getElementById('currTurn').innerText=(turn===1)?'X Turn':'O Turn';
                //setTimeout(function(){
                    let text;
                    initialBoard=document.querySelector('#board').innerHTML;
                    if(isFull()===true){
                        let gameResult=checkWin();
                        if(gameResult===0){
                            text='XO';
                        }
                        else if(gameResult===1){
                            text='X';
                        }
                        else{
                            text='O';
                        }
                        score[gameResult]++;
                        console.log(score,'up');
                        document.getElementById('currTurn').innerText='Game Over';
                        // document.getElementById("board").innerText=text;
                        setTimeout(()=>{
                            let htmlText='<div class="newRes"><p class="winnerId">'+text+'</p>';
                            if(text==='XO'){
                                htmlText+='<p class="gameState">DRAW!</p></div>';
                            }
                            else{
                                htmlText+='<p class="gameState">WINNER!</p></div>';
                            }
                            document.getElementById("board").innerHTML=htmlText;
                        },1000)
                        
                    }
                    else{
                        let gameResult=checkWin();
                        if(gameResult===1){
                            score[gameResult]++;
                            console.log(score,'down1',x,y);
                            document.getElementById('currTurn').innerText='Game Over';
                            // document.getElementById("board").innerText='X Wins';
                            setTimeout(()=>{
                                let htmlText='<div class="newRes"><p class="winnerId">X</p>';
                                htmlText+='<p class="gameState">WINNER!</p></div>';
                                document.getElementById("board").innerHTML=htmlText;
                            },1000)
                        }
                        else if(gameResult===2){
                            score[gameResult]++;
                            console.log(score,'down2',x,y);
                            document.getElementById('currTurn').innerText='Game Over';
                            // document.getElementById("board").innerText='O wins';
                            setTimeout(()=>{
                                let htmlText='<div class="newRes"><p class="winnerId">O</p>';
                                htmlText+='<p class="gameState">WINNER!</p></div>';
                                document.getElementById("board").innerHTML=htmlText;
                            },1000)
                        }
    
                        
                    }
                //}, 2000);
                
            }
        })
    })
}
document.querySelector('#restart').addEventListener('click',()=>{
    init();
    eventAdder();
})

eventAdder();





