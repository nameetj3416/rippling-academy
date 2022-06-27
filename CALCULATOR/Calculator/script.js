let exp="";
document.querySelectorAll('#num').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('#display').setAttribute("style", "border: 1px solid #4073f5");
        let input=item.title
        if(exp.length===1 && exp[0]==='0'){
            exp="";
        }
        exp+=input;
        document.getElementById("currentExp").innerText=exp;
    })
})
document.querySelectorAll('#key').forEach(item => {
    item.addEventListener('click', event => {

        let input=item.title
        if(exp.length===1 && exp[0]==='0'){
            exp="";
        }
        exp+=input;
        document.getElementById("currentExp").innerText=exp;
    })
})
document.getElementById("equalsTo").addEventListener("click",()=>{
    try{
        let ans=eval(exp);
        document.getElementById("currentExp").innerText=ans.toString();
        document.getElementById("finalRes").innerText=exp+" = "
        document.getElementById("ce-ac").innerText="AC";
        exp=ans.toString();
    }
    catch(err){
        document.getElementById("currentExp").innerText='Incorrect Expression';
    }
})
document.getElementById("ce-ac").addEventListener("click",()=>{
    let text=document.getElementById("ce-ac").innerText;
    if(text==="AC"){
        if(document.getElementById("currentExp").innerText==='Incorrect Expression'){
            exp="0";
            document.getElementById("currentExp").innerText=exp;
            document.getElementById("ce-ac").innerText="CE";
        }
        document.getElementById("finalRes").innerText="Ans="+eval(exp).toString();
        exp="0";
        document.getElementById("currentExp").innerText=exp;
        document.getElementById("ce-ac").innerText="CE";
    }
    else if(text==="CE"){
        if(exp!=="0"){
            exp=exp.slice(0,-1);
            if(exp.length===0){
                exp="0";
            }
            document.getElementById("currentExp").innerText=exp;
        }
        
    }
})
$(function() {
    while( $('#display div').height() > $('#display').height() ) {
        $('#display div').css('font-size', (parseInt($('#display div').css('font-size')) - 1) + "px" );
    }
});